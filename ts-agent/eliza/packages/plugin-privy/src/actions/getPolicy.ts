import {
    elizaLogger,
    Action,
    ActionExample,
    HandlerCallback,
    IAgentRuntime,
    Memory,
    State,
} from "@elizaos/core";
import { validatePrivyConfig } from "../environment"; // Assuming you have a config validation function
import { getPolicyExamples } from "../examples"; // Assuming you have examples for getting policies
import { createPolicyService } from "../services"; // Import the getPolicy function

export const getPolicyAction: Action = {
    name: "GET_PRIVY_POLICY",
    similes: [
        "GET POLICY",
        "RETRIEVE POLICY",
        "FETCH POLICY"
    ],
    description: "Retrieve a Privy policy by its ID.",
    validate: async (runtime: IAgentRuntime) => {
        await validatePrivyConfig(runtime); // Validate Privy configuration
        return true;
    },
    handler: async (
        runtime: IAgentRuntime,
        message: Memory,
        state: State,
        options: { [key: string]: unknown },
        callback: HandlerCallback
    ) => {
        const config = await validatePrivyConfig(runtime);
        const privyApiKey = config.PRIVY_API_KEY; // Get the Privy app secret from the config
        const privyAppSecret = config.PRIVY_APP_SECRET; // Get the Privy app secret from the config
        const authRequestKey = config.AUTH_REQUEST_KEY; // Get the Privy app secret from the config
        const policyId = options.policyId as string; // Get policy ID from options
        const name = options.name as string; // Get policy name from options

        if (!policyId) {
            callback({
                text: "Policy ID is required.",
                content: { error: "Policy ID is required." },
            });
            return false;
        }

        const policyService = createPolicyService(name, privyApiKey, privyAppSecret, authRequestKey); // Create wallet service instance


        try {
            const policyData = await policyService.getPolicy(policyId); // Call the getPolicy function
            elizaLogger.success(`Successfully retrieved policy with ID: ${policyData.id}`);
            if (callback) {
                callback({
                    text: `Policy retrieved successfully! Policy ID: ${policyData.id}`,
                    content: { policy: policyData },
                });
                return true;
            }
        } catch (error: any) {
            elizaLogger.error("Error in get policy action:", error);
            callback({
                text: `Error retrieving policy: ${error.message}`,
                content: { error: error.message },
            });
            return false;
        }
    },
    examples: getPolicyExamples as ActionExample[][], // Assuming you have examples for this action
} as Action;

