import React, { useContext, useState } from "react";
import "./Card.css";
import cloudyIcon from "../assets/cloudy.png";
import snowyIcon from "../assets/snowy.png";
import sunnyIcon from "../assets/sunny.png";
import rainyIcon from "../assets/rainy.png";
import humidityIcon from "../assets/humidity.png";
import windIcon from "../assets/wind.png";
import { WeatherContext } from "../context/WeatherApi";

function Card() {
	const weatherData = useContext(WeatherContext);
	const [activeIndex, setActiveIndex] = useState(0);

	const toggleActive = (index) => {
		setActiveIndex(index === activeIndex ? null : index);
	};

	if (!weatherData || weatherData.length === 0) {
		return <div>Loading...</div>;
	}

	return (
		<div className="gallery">
			{weatherData.map((todayWeather, index) => (
				<div
					key={index}
					className={`card-container ${index === activeIndex ? "active" : ""}`}
					onClick={() => toggleActive(index)}
				>
					<h3 className="day">{todayWeather.date}</h3>
					<p className="city">{todayWeather.city}</p>
					<div className="image-container">
						<img
							className="weather-image"
							src={
								todayWeather.weatherDescription === "Clear"
									? sunnyIcon
									: todayWeather.weatherDescription === "Snowy"
									? snowyIcon
									: todayWeather.weatherDescription === "Clouds"
									? cloudyIcon
									: todayWeather.weatherDescription === "Rain"
									? rainyIcon
									: ""
							}
							alt=""
						/>
					</div>
					<div className="current-weather">
						<p className="current-degree">{todayWeather.temperature}°C</p>
						<p className="current-status">{todayWeather.weatherDescription}</p>
					</div>
					<div className="weather-details">
						<div className="col">
							<img src={humidityIcon} alt="" />
							<div>
								<p className="humidity">{todayWeather.humidity}%</p>
								<p>Humidity</p>
							</div>
						</div>
						<div className="col">
							<img src={windIcon} alt="" />
							<div>
								<p className="wind-speed">{todayWeather.windSpeed} km/h</p>
								<p>Wind Speed</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default Card;
