import { useState, useEffect } from "react";
import { getCurrentWeather } from "../../utils/weatherApi";
import Preloader from "../Preloader/Preloader";
import "./WeatherCard.css";

function WeatherCard({ className }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    getCurrentWeather(46.914454, -121.643463)
      .then((data) => {
        setWeatherData(data);
      })
      .catch(console.error);
  }, []);

  if (!weatherData) return <Preloader />;

  return (
    <div className={`weather-card ${className}`}>
      <h2 className="weather-card__title">Current Weather</h2>
      <p className="weather-card__location">Sunrise Visitor Center</p>
      <div className="weather-card__content">
        <div className="weather-card__weather">
          <div className="weather-card__temp">
            {weatherData.temperature}&deg;F
          </div>
          <div className="weather-card__weather-type">
            <div className="weather-card__description">
              {weatherData.description}
            </div>
            <img
              className="weather-card__icon"
              src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
              alt="Weather icon"
            />
          </div>
        </div>
        <div className="weather-card__sun-times">
          <div>Sunrise: {weatherData.sunrise}</div>
          <div>Sunset: {weatherData.sunset}</div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
