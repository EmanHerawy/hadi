import {
    elizaLogger,
    Action,
    ActionExample,
    HandlerCallback,
    IAgentRuntime,
    Memory,
    State,
} from "@elizaos/core";
import { validateHalalScannerConfig } from "../environment";
import { getHalalScannerExamples } from "../examples";
import { createHalalScannerService } from "../services";

export const getTokenStatusAction: Action = {
    name: "HALAL_TOKEN_ASSESSMENT",
    similes: [
        "HALAL",
        "ISLAMIC",
        "SHARIA",
        "ISLAMIC_LAW",
        "ISLAMIC_FINANCE",
        "ISLAMIC_LAW",
        "ISLAMIC_FINANCE",
        "ISLAMIC_DEFI",
        "ISLAMIC_CRYPTO",
        "ISLAMIC_BLOCKCHAIN",
        "ISLAMIC_FINTECH",
        "ISLAMIC_FINTECH",
        "ISLAMIC_FINTECH",
    ],
    description: "Get the halal status of a token.",
    validate: async (runtime: IAgentRuntime) => {
        await validateHalalScannerConfig(runtime);
        return true;
    },
    handler: async (
        runtime: IAgentRuntime,
        message: Memory,
        state: State,
        _options: { [key: string]: unknown },
        callback: HandlerCallback
    ) => {

        const config = await validateHalalScannerConfig(runtime);
        
        // Check if the required properties exist
        if (!config.HALAL_SCANNER_API_KEY || !config.HALAL_SCANNER_UUID) {
            elizaLogger.error("Missing HALAL_SCANNER_API_KEY or HALAL_SCANNER_UUID in config");
            callback({
                text: "Configuration error: Missing API key or UUID.",
                content: { error: "Missing HALAL_SCANNER_API_KEY or HALAL_SCANNER_UUID" },
            });
            return false;
        }

        const halalScannerService = createHalalScannerService(
            config.HALAL_SCANNER_API_KEY,
            config.HALAL_SCANNER_UUID
        );

        try {
            const halalStatus = await halalScannerService.checkTokenForHalalCompliance();
            elizaLogger.success(
                `Successfully fetched halal status`
            );
            if (callback) {
                callback({
                    text: `Here is the halal status of the token: ${halalStatus.IsHalal}`
                });
                return true;
            }
        } catch (error:any) {
            elizaLogger.error("Error in NASA plugin handler:", error);
            callback({
                text: `Error fetching APOD: ${error.message}`,
                content: { error: error.message },
            });
            return false;
        }
    },
    examples: getHalalScannerExamples as ActionExample[][],
} as Action;
