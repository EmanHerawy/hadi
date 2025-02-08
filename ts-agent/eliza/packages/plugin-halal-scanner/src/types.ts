export interface HalalScannerResponse {
    IsHalal: boolean;
    justification: string;
    riskAssessment: string;
}

export interface APODResponse {
    photo: string;
    // Add other fields as needed
}

export interface MarsRoverDataResponse {
    photo: string;
    sol: number;
    camera: string;
    rover: string;
}
