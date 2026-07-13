export interface ClimateProfile {
    monthName: string;
    temps: {
        min: number;
        max: number;
    };
    coolThreshold: number;
    weatherTypes: string[];
    probabilities: Record<string, number>;
}

export type ClimateProfiles = Record<number, ClimateProfile>;
