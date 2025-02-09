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
import { updatePolicyExamples } from "../examples"; // Assuming you have examples for updating policies
import { createPolicyService } from "../services"; // Import the createPolicyService
import { boolean } from "zod";

export const updatePolicyAction: Action = {
    name: "UPDATE_PRIVY_POLICY",
    similes: [
        "UPDATE POLICY",
        "EDIT POLICY",
        "MODIFY POLICY"
    ],
    description: "Update an existing Privy policy.",
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
        const policyId = options.policyId as string; // Get policy ID from options
        const tokenName  = options.tokenName as string; // Get tokenName from options
        const tokenAddress = options.tokenAddress as string; // Get tokenAddress from options
        const remove = options.remove as boolean; // Get remove from options

        if (!policyId || (!tokenName && !tokenAddress)) {
            callback({
                text: "Policy ID and data are required.",
                content: { error: "Policy ID and data are required." },
            });
            return false;
        }

        const policyService = createPolicyService("", privyApiKey, privyAppSecret, authRequestKey); // Create policy service instance

        try {
            const updatedPolicy = await policyService.updatePolicy(policyId, tokenName, tokenAddress, remove === true); // Call the updatePolicy function
            elizaLogger.success(`Successfully updated policy with ID: ${updatedPolicy.id}`);
            if (callback) {
                callback({
                    text: `Policy updated successfully! Policy ID: ${updatedPolicy.id}`,
                    content: { policy: updatedPolicy },
                });
                return true;
            }
        } catch (error: any) {
            elizaLogger.error("Error in update policy action:", error);
            callback({
                text: `Error updating policy: ${error.message}`,
                content: { error: error.message },
            });
            return false;
        }
    },
    examples: updatePolicyExamples as ActionExample[][], // Assuming you have examples for this action
} as Action;
