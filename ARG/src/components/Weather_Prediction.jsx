import {useState, useEffect} from "react";
import {generateForcast} from "../util/genorateForcast.ts";
import "../styles/weather_prediction.css";

function Weather_Prediction() {
    const [forcast, setForcast] = useState([]);

    useEffect(() => {
        const data = generateForcast();
        setForcast(data)
    }, [])

    const averageTemp = forcast.length > 0
        ? Math.round(
            forcast.reduce((sum, day) => sum + day.temp, 0) / forcast.length
        ) : 0;

    return(
        <div className="weather-prediction">
            <h2>7 Day Forcast</h2>
            {forcast.map((day) => (
                <div key={day.day}>
                    <strong> Day {day.day}</strong>: {day.weather}, {day.temp}°F ({day.feels})
                </div>
            ))}
            <div className="average-temp">
                <p><strong>Average Temp:</strong> {averageTemp}°F</p>
                <br/>
                <p></p>
            </div>
        </div>
    );
}
export default Weather_Prediction;