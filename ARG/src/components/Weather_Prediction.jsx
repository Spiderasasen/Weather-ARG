import {useState, useEffect} from "react";
import {generateForcast} from "../util/genorateForcast.ts";
import "../styles/weather_prediction.css";

function Weather_Prediction() {
    //variables
    const [forcast, setForcast] = useState([]);
    const month = new Date().getMonth();

    //use effects
    useEffect(() => {
        const data = generateForcast();
        setForcast(data)
    }, [])

    //months
    const monthNames = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December",
    }

    //functions
    const averageTemp = forcast.length > 0
        ? Math.round(
            forcast.reduce((sum, day) => sum + day.temp, 0) / forcast.length
        ) : 0;

    const monthMessage = () => {
        const monthName = monthNames[month];

        //this is winter
        if(monthName === "December" || monthName === "January" || monthName === "February"){
            return "It's a bit chilly today, but that doesnt mean you can't enjoy the outdoors!";
        }
        //this is for march
        else if(monthName === "March"){
            return "It's getting warmer, but still a bit chilly. Don't forget your jacket to explore our beautiful outdoors!";
        }
        //this is for may
        else if(monthName === "May"){
            return "The heat is ramping up, best to enjoy the outdoors in the summer!";
        }
        //this is for summer
        else if(monthName === "June" || monthName === "July" || monthName === "August"){
            return "Go outside! Enjoy this lovely heat by the pool!";
        }
        //this is for september
        else if(monthName === "September" ){
            return "The summer is ending, dont forget to look up and wave the sun goodbye for its beautiful heat!";
        }
        //this is for november
        else if(monthName === "November"){
            return "The rain is coming, but doesnt mean that we cant enjoy our rain with rain boots and umbrellas!";
        }
        else{
            return `The month is ${monthName}`
        }

    }

    return(
        <div className="weather-prediction">
            <h2>7 Day Forcast</h2>
            {forcast.map((day) => (
                <div key={day.day}>
                    <strong> Day {day.day}</strong>: {day.weather}, {day.temp}°F
                </div>
            ))}
            <div className="average-temp">
                <p><strong>Average Temp this Week:</strong> {averageTemp}°F</p>
                <br/>
                <em>{monthMessage()}</em>
            </div>
        </div>
    );
}
export default Weather_Prediction;