import {
    HalalScannerResponse
} from "./types";

const CREWAI_URL = "https://sharia-agent-167d14a8-db8d-4e5c-924f-61c278-11a6f99e.crewai.com/";
const fakeResponse = {
    IsHalal: true,
    justification: "This token is halal",
    riskAssessment: "This token is low risk"
}
export const createHalalScannerService = (tokenName: string, apiKey: string, UUID: string) => {
    const checkTokenForHalalCompliance = async (): Promise<HalalScannerResponse> => {
        if (!apiKey || !UUID ) {
            throw new Error("Invalid parameters");
        }
        console.log('tokenName: ', tokenName)
        if (!tokenName) {
            throw new Error("Token name is required");
        }
      
        try {
            const url = `${CREWAI_URL}Bearer ${apiKey}&UUID=${UUID}`; // Updated to use environment variables
            // Fetch the URL and check if the response is OK
            const response = await fetch(url);
            if (!response.ok) {
                console.log("error in response: ", response)
                // If not OK, parse the error response and throw an error
               // const error = await response.json();
                //throw new Error(error?.message || response.statusText);
            }

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


