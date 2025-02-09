import { IAgentRuntime } from "@elizaos/core";
import { z } from "zod";

export const privyEnvSchema = z.object({
    PRIVY_APP_ID: z.string().min(1, "Privy App ID is required"),
    PRIVY_APP_SECRET: z.string().min(1, "Privy App Secret is required"),
    AUTH_REQUEST_KEY: z.string().min(1, "Auth Request Key is required"),
});

export type PrivyConfig = z.infer<typeof privyEnvSchema>;

export async function validatePrivyConfig(
    runtime: IAgentRuntime
): Promise<PrivyConfig> {
    try {
        const config = {
            PRIVY_APP_ID: runtime.getSetting("PRIVY_APP_ID"),
            PRIVY_APP_SECRET: runtime.getSetting("PRIVY_APP_SECRET"),
            AUTH_REQUEST_KEY: runtime.getSetting("AUTH_REQUEST_KEY"),
        };
        console.log('config: ', config)
        return privyEnvSchema.parse(config);
    } catch (error) {
        console.log("error::::", error)
        if (error instanceof z.ZodError) {
            const errorMessages = error.errors
                .map((err) => `${err.path.join(".")}: ${err.message}`)
                .join("\n");
            throw new Error(
                `Privy API configuration validation failed:\n${errorMessages}`
            );
        }
        throw error;
    }
}