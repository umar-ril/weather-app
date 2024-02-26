
import './WeatherApp.css';

import search_icon from "../Assets/search.png";
import cloud_icon from "../Assets/cloud.png";
// import clear_icon from "../Assets/clear.png";
// import drizzle_icon from "../Assets/drizzle.png";
// import rain_icon from "../Assets/rain.png";
// import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";

export default function WeatherApp() {

    // const[wImage,setWImage] = React.useState(cloud_icon)

    let apikey = "361e00ccabbb4ff3b32123151242002";

    const search = async ()=>{
        const inputText = document.getElementsByClassName("city-input")
        if (inputText[0].value === " "){
            return 0
        }
        let url = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${inputText[0].value}`

        let response = await fetch(url);
        let data = await response.json();

        const humidity =document.getElementsByClassName("humidity-percent")
        const wind =document.getElementsByClassName("wind-rate")
        const location =document.getElementsByClassName("weather-location")
        const temperature =document.getElementsByClassName("weather-temp")
        const wimage = document.getElementById("Image")

        humidity[0].innerHTML = data.current.humidity + "%";
        wind[0].innerHTML = data.current.wind_kph + "km/h";
        location[0].innerHTML = data.location.name ;
        temperature[0].innerHTML = data.current.temp_c+"°C";
        wimage.src = data.current.condition.icon

    }



    return (
        <div className="container">
            <div className="top-bar">
                <input type="text" className="city-input"
                    placeholder='Search City' />
                <div className="search-icon">
                    <img src={search_icon} alt="search-icon"
                    onClick = {search} /></div>
            </div>
            <div className="weather-image">
                <img id="Image" src={cloud_icon} alt="" width={"280px"} />
            </div>
            <div className="weather-temp">
                25°C
            </div>
            <h1 className="weather-location">India</h1>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" width={"40px"} />
                    <div className="data">
                        <div className="humidity-percent">50%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" width={"40px"} className="icon" />
                    <div className="data">
                        <div className="wind-rate">20 km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

