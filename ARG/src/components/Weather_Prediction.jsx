import {useState, useEffect} from "react";
import {generateForcast} from "../util/genorateForcast.ts";

function Weather_Prediction() {
    const [forcast, setForcast] = useState([]);

    useEffect(() => {
        setForcast(generateForcast())
    }, [])

    return(
        <div>
            <h2>7 Day Forcast</h2>
            {forcast.map((day) => (
                <div key={day.day}>
                    <strong> Day {day.day}</strong>: {day.weather}, {day.temp}°F
                </div>
            ))}
        </div>
    );
}
export default Weather_Prediction;