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
import { createPolicyExamples } from "../examples"; // Assuming you have examples for creating policies
import { createPolicyService } from "../services"; // Import the createPolicyService

export const createPolicyAction: Action = {
    name: "CREATE_PRIVY_POLICY",
    similes: [
        "CREATE POLICY",
        "ADD POLICY",
        "NEW POLICY"
    ],
    description: "Create a new Privy policy.",
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
        const privyApiKey = config.PRIVY_API_KEY; // Get the Privy API key from the config
        const privyAppSecret = config.PRIVY_APP_SECRET; // Get the Privy app secret from the config
        const authRequestKey = config.AUTH_REQUEST_KEY; // Get the authorization request key from the config
        const policyData = options.policyData; // Get policy data from options

        if (!policyData) {
            callback({
                text: "Policy data is required.",
                content: { error: "Policy data is required." },
            });
            return false;
        }

        const policyService = createPolicyService("", privyApiKey, privyAppSecret, authRequestKey); // Create policy service instance

        try {
            const newPolicy = await policyService.createPolicy(); // Call the createPolicy function
            elizaLogger.success(`Successfully created policy with ID: ${newPolicy.id}`);
            if (callback) {
                callback({
                    text: `Policy created successfully! Policy ID: ${newPolicy.id}`,
                    content: { policy: newPolicy },
                });
                return true;
            }
        } catch (error: any) {
            elizaLogger.error("Error in create policy action:", error);
            callback({
                text: `Error creating policy: ${error.message}`,
                content: { error: error.message },
            });
            return false;
        }
    },
    examples: createPolicyExamples as ActionExample[][], // Assuming you have examples for this action
} as Action;

