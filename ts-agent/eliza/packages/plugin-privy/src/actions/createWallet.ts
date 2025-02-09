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
import { createWalletExamples } from "../examples"; // Assuming you have examples for creating wallets
import { createWalletService } from "../services"; // Import the createWalletService

export const createWalletAction: Action = {
    name: "PRIVY_CREATE_WALLET",
    similes: [
        "CREATE WALLET",
        "NEW WALLET",
        "ADD WALLET"
    ],
    description: "Create a new Privy wallet.",
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
        const privyAppID = config.PRIVY_APP_ID; // Get the Privy app id from the config
        const privyAppSecret = config.PRIVY_APP_SECRET; // Get the Privy app secret from the config
        const authorizationThreshold = options.authorizationThreshold as number || 150; // Get authorization threshold from options
        const policyIds = options.policyIds as string[] || ['zh4ugr13u3maafdrmrvvrt40']; // Get policy IDs from options

        const walletService = createWalletService(privyAppID, privyAppSecret); // Create wallet service instance

        try {
            const walletData = await walletService.createWallet(policyIds);
            elizaLogger.success(`Successfully created wallet with ID: ${walletData.id}`);
            if (callback) {
                callback({
                    text: `Wallet created successfully! Wallet ID: ${walletData.id}`,
                    content: { wallet: walletData },
                });
                return true;
            }
        } catch (error: any) {
            elizaLogger.error("Error in create wallet action:", error);
            callback({
                text: `Error creating wallet: ${error.message}`,
                content: { error: error.message },
            });
            return false;
        }
    },
    examples: createWalletExamples as ActionExample[][], // Assuming you have examples for this action
} as Action;