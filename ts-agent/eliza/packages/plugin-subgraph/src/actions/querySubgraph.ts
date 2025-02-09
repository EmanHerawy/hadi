import {
    elizaLogger,
    Action,
    ActionExample,
    HandlerCallback,
    IAgentRuntime,
    Memory,
    State,
    ModelClass,
    generateObject,
    composeContext,
} from "@elizaos/core";
import { validateTheGraphConfig } from "../environment";
import { subgraphQueryExamples } from "../examples";
import { createTheGraphService } from "../services";
import { TokenContentSchema, TokenContentScemaType } from "../types";
import { subgraphQueryTemplate } from "../templates";

export const isTokenContent = (
    object: any
): object is TokenContentScemaType => {
    if (TokenContentSchema.safeParse(object).success) {
        return true;
    }
    return false;
};

export const querySubgraphAction: Action = {
    name: "SUBGRAPH_QUERY",
    similes: [
        "SUBGRAPH_QUERY",
        "INDEXING",
        "QUERY",
        "GRAPHQL",
       "THE_GRAPH",
       "SUBSTREAMS"
    ],
    description: "Query the subgraph for the token information.",
    validate: async (runtime: IAgentRuntime) => {
        await validateTheGraphConfig(runtime);
        return true;
    },
    handler: async (
        runtime: IAgentRuntime,
        message: Memory,
        state: State,
        _options: { [key: string]: unknown },
        callback: HandlerCallback
    ) => {

        const config = await validateTheGraphConfig(runtime);
        
        // Check if the required properties exist
        if (!config.THE_GRAPH_API_KEY || !config.THE_GRAPH_SUBGRAPH_ID) {
            elizaLogger.error("Missing THE_GRAPH_API_KEY in config");
            callback({
                text: "Configuration error: Missing API key for the subgraph.",
                content: { error: "Missing THE_GRAPH_API_KEY" },
            });
            return false;
        }
        const context = composeContext({
            state,
            template: subgraphQueryTemplate,
        });

// Generates structured objects from a prompt using specified AI models and configuration options.

        const content = await generateObject({
            runtime,
            context,
            modelClass: ModelClass.SMALL,
            schema: TokenContentSchema,
        });

        if (!isTokenContent(content.object)) {
            const missingFields = getMissingTokenContent(
                content.object
            );
            callback({
                text: `Need more information about the swap. Please provide me ${missingFields}`,
            });
            return;
        }

        // Check if tokenName exists in content
        if (!content.object) {
            callback({
                text: "Missing query in the content.",
                content: { error: "Missing query" },
            });
            return;
        }
        const APIURL = `https://gateway.thegraph.com/api/${config.THE_GRAPH_API_KEY}/subgraphs/id/${config.THE_GRAPH_SUBGRAPH_ID}`

        const theGraphService = createTheGraphService(
            content.object,
            APIURL,
        );

        try {
            const subgraphData = await theGraphService.queryTheGraph();
            elizaLogger.success(
                `Successfully fetched subgraph data`
            );
            if (callback) {
                callback({
                    text: `Here is the subgraph data: ${subgraphData}`
                });
                return true;
            }
        } catch (error:any) {
            elizaLogger.error("Error in Subgraph plugin handler:", error);
            callback({
                text: `Error fetching subgraph data: ${error.message}`,
                content: { error: error.message },
            });
            return false;
        }
    },
    examples: subgraphQueryExamples as ActionExample[][],
} as Action;

export const getMissingTokenContent = (
    content: Partial<TokenContentScemaType>
): string => {
    const missingFields = [];

    if (typeof content !== "string")
        missingFields.push("query");
   
    return missingFields.join(" and ");
};
