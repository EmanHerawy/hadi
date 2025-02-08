import { IAgentRuntime } from "@elizaos/core";
import { z } from "zod";

export const HadiCewAIEnvSchema = z.object({
    HALAL_SCANNER_API_KEY: z.string().min(1, "Halal ScanneerAPI key is required"),
});

export type HadiCewAIConfig = z.infer<typeof HadiCewAIEnvSchema>;

export async function validateHalalScannerConfig(
    runtime: IAgentRuntime
): Promise<HadiCewAIConfig> {
    try {
        const config = {
            HALAL_SCANNER_API_KEY: runtime.getSetting("HALAL_SCANNER_API_KEY"),
        };
        console.log('config: ', config)
        return HadiCewAIEnvSchema.parse(config);
    } catch (error) {
        console.log("error::::", error)
        if (error instanceof z.ZodError) {
            const errorMessages = error.errors
                .map((err) => `${err.path.join(".")}: ${err.message}`)
                .join("\n");
            throw new Error(
                `HadiCewAI API configuration validation failed:\n${errorMessages}`
            );
        }
        throw error;
    }
}