import {
    HalalScannerResponse
} from "./types";

const CREWAI_URL = "https://api.crewai.com/v1/halal-scanner";

export const createHalalScannerService = (apiKey: string) => {
    const checkTokenForHalalCompliance = async (): Promise<HalalScannerResponse> => {
        if (!apiKey) {
            throw new Error("Invalid parameters");
        }

        try {
            const url = CREWAI_URL + apiKey
            const response = await fetch(url);
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error?.message || response.statusText);
            }

            const data = await response.json();
            return data;
        } catch (error: any) {
            console.error("Halal Scanner API Error:", error.message);
            throw error;
        }
    };



    return { checkTokenForHalalCompliance };
};


