import {
    HalalScannerResponse
} from "./types";

const fakeResponse = {
    IsHalal: true,
    justification: "This token is halal",
    riskAssessment: "This token is low risk"
}
export const createHalalScannerService = (tokenName: string, CREWAI_URL: string) => {
    const checkTokenForHalalCompliance = async (): Promise<HalalScannerResponse> => {
        if ( !CREWAI_URL ) {
            throw new Error("Invalid parameters");
        }
        console.log('tokenName: ', tokenName)
        if (!tokenName) {
            throw new Error("Token name is required");
        }
      
        try {
            const url = `${CREWAI_URL}`; // Updated to use environment variables
            // Fetch the URL and check if the response is OK
            const response = await fetch(url);
            if (!response.ok) {
                console.log("error in response: ", response)
               // If not OK, parse the error response and throw an error
               const error = await response.json();
                throw new Error(error?.message || response.statusText);
            }

            // // If the response is OK, parse the data from the response
             const data = await response.json();
            return data;
        } catch (error: any) {
            console.error("Halal Scanner API Error:", error.message);
            throw error;
        }
    };



    return { checkTokenForHalalCompliance };
};


