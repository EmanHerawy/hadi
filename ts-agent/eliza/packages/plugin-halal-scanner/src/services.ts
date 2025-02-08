import {
    HalalScannerResponse
} from "./types";

const CREWAI_URL = "https://api.crewai.com/v1/halal-scanner";
const fakeResponse = {
    IsHalal: true,
    justification: "This token is halal",
    riskAssessment: "This token is low risk"
}
export const createHalalScannerService = (apiKey: string) => {
    const checkTokenForHalalCompliance = async (): Promise<HalalScannerResponse> => {
        if (!apiKey) {
            throw new Error("Invalid parameters");
        }

        try {
            const url = CREWAI_URL + apiKey
            // Fetch the URL and check if the response is OK
            // const response = await fetch(url);
            // if (!response.ok) {
            //     // If not OK, parse the error response and throw an error
            //     const error = await response.json();
            //     throw new Error(error?.message || response.statusText);
            // }

            // // If the response is OK, parse the data from the response
            // const data = await response.json();
            const data = fakeResponse;
            return data;
        } catch (error: any) {
            console.error("Halal Scanner API Error:", error.message);
            throw error;
        }
    };



    return { checkTokenForHalalCompliance };
};


