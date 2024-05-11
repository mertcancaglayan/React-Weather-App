import React from "react";
import "./Card.css";
import fogIcon from "../assets/fog.png";
import rainyIcon from "../assets/rainy.png";
import cloudyIcon from "../assets/cloudy.png";
import sunnyIcon from "../assets/sunny.png";
import humidityIcon from "../assets/humidity.png";
import windIcon from "../assets/wind.png";

function Card() {
	return (
		<>
			<div className="card-container active">
				<p className="day">Day</p>
				<p className="city">Istanbul</p>
				<div className="image-container">
					<img className="weather-image" src={sunnyIcon} alt="" />
				</div>
				<div className="current-weather">
					<p className="current-degree">33°C</p>
					<p className="current-status">Cloudy</p>
				</div>
				<div className="weather-details">
					<div className="col">
						<img src={humidityIcon} alt="" />
						<div>
							<p className="humidity">70%</p>
							<p>Humidity</p>
						</div>
					</div>
					<div className="col">
						<img src={windIcon} alt="" />
						<div>
							<p className="wind-speed">15 km/h</p>
							<p>Wind Speed</p>
						</div>
					</div>
				</div>
			</div>
			<div className="card-container">
				<p className="day">Day</p>
				<p className="city">Istanbul</p>
				<div className="image-container">
					<img className="weather-image" src={cloudyIcon} alt="" />
				</div>
				<div className="current-weather">
					<p className="current-degree">33°C</p>
					<p className="current-status">Cloudy</p>
				</div>
				<div className="weather-details">
					<div className="col">
						<img src={humidityIcon} alt="" />
						<div>
							<p className="humidity">70%</p>
							<p>Humidity</p>
						</div>
					</div>
					<div className="col">
						<img src={windIcon} alt="" />
						<div>
							<p className="wind-speed">15 km/h</p>
							<p>Wind Speed</p>
						</div>
					</div>
				</div>
			</div>{" "}
			<div className="card-container">
				<p className="day">Day</p>
				<p className="city">Istanbul</p>
				<div className="image-container">
					<img className="weather-image" src={fogIcon} alt="" />
				</div>
				<div className="current-weather">
					<p className="current-degree">33</p>
					<p className="current-status">Cloudy</p>
				</div>
				<div className="weather-details">
					<div className="col">
						<img src={humidityIcon} alt="" />
						<div>
							<p className="humidity">70%</p>
							<p>Humidity</p>
						</div>
					</div>
					<div className="col">
						<img src={windIcon} alt="" />
						<div>
							<p className="wind-speed">15 km/h</p>
							<p>Wind Speed</p>
						</div>
					</div>
				</div>
			</div>{" "}
			<div className="card-container">
				<p className="day">Day</p>
				<p className="city">Istanbul</p>
				<div className="image-container">
					<img className="weather-image" src={rainyIcon} alt="" />
				</div>
				<div className="current-weather">
					<p className="current-degree">33</p>
					<p className="current-status">Cloudy</p>
				</div>
				<div className="weather-details">
					<div className="col">
						<img src={humidityIcon} alt="" />
						<div>
							<p className="humidity">70%</p>
							<p>Humidity</p>
						</div>
					</div>
					<div className="col">
						<img src={windIcon} alt="" />
						<div>
							<p className="wind-speed">15 km/h</p>
							<p>Wind Speed</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;
