import type {ClimateProfiles} from "./ClimateProfiles";
import month_and_teampature from "../data/month_and_tempature.json"

const climateProfiles = month_and_teampature as ClimateProfiles;

export interface Forcast{
    day: number;
    temp: number;
    weather: string;
}

export function generateForcast(): Forcast[]{
    const month:number = new Date().getMonth();
    const profile = climateProfiles[month];

    if(!profile){
        throw new Error(`No climate profile found for month index ${month}`);
    }

    //gets a random weather type of that month
    const pickWeather = () => {
        const r:number = Math.random();
        let sum:number = 0;

        for(const [type, prob] of Object.entries(profile.probabilities)){
            sum += prob;
            if(r <= sum){
                return type;
            }
        }
        return profile.weatherTypes[0];
    };

    //adjusted the tempature after the weather is picked
    const applyModifier = (weather: string, temp: number): number => {
        const mod = profile.tempModifier[weather] ?? 0;
        return temp + mod;
    }

    //gets a random temperature of that month
    const pickTemp = (): number => {
        const{min, max} = profile.temps;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const days: Forcast[] =[];

    for(let i = 0; i < 7; i++) {
        const baseTemp = pickTemp();
        const weather = pickWeather();
        const finalTemp = applyModifier(weather, baseTemp)

        //what we apply to the day
        days.push({
            day: i + 1,
            temp: finalTemp,
            weather: pickWeather(),
        });
    }
    return days;
}