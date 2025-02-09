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
import { sendTransactionExamples } from "../examples"; // Assuming you have examples for sending transactions
import { createWalletService } from "../services"; // Import the sendTransaction function

export const sendTransactionAction: Action = {
    name: "SEND_PRIVY_TRANSACTION",
    similes: [
        "SEND TRANSACTION",
        "EXECUTE TRANSACTION",
        "SUBMIT TRANSACTION"
    ],
    description: "Send a transaction using the Privy API.",
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
        const walletId = options.walletId as string; // Get wallet ID from options
        const caip2 = options.caip2 as string; // Get CAIP-2 identifier from options
        const transaction = options.transaction as { to: string; value: number }; // Get transaction details from options

        if (!walletId || !caip2 || !transaction) {
            callback({
                text: "Wallet ID, CAIP-2 identifier, and transaction details are required.",
                content: { error: "Wallet ID, CAIP-2 identifier, and transaction details are required." },
            });
            return false;
        }

        const walletService = createWalletService(privyAppSecret, authRequestKey); // Create wallet service instance


        try {
            const result = await walletService.sendTransaction(walletId, caip2, transaction); // Call the sendTransaction function
            elizaLogger.success(`Successfully sent transaction with ID: ${result.id}`);
            if (callback) {
                callback({
                    text: `Transaction sent successfully! Transaction ID: ${result.id}`,
                    content: { transaction: result },
                });
                return true;
            }
        } catch (error: any) {
            elizaLogger.error("Error in send transaction action:", error);
            callback({
                text: `Error sending transaction: ${error.message}`,
                content: { error: error.message },
            });
            return false;
        }
    },
    examples: sendTransactionExamples as ActionExample[][], // Assuming you have examples for this action
} as Action;
