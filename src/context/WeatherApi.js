import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { useCity } from "./CityContext";

const apiKey = "943d48e588bf34f870ac290f2710867e";

const WeatherContext = createContext();

function WeatherApi({ children }) {
	const [weatherData, setWeatherData] = useState(null);
	const { selectCity } = useCity();
	const [city, setCity] = useState(selectCity);

	useEffect(() => {
		setCity(selectCity);
	}, [selectCity]);

	useEffect(() => {
		const fetchData = async () => {
			const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&exclude=current,hourly,minutely&appid=${apiKey}&units=metric`;

			try {
				const response = await axios.get(apiUrl);
				const weatherData = response.data;

				const today = new Date();
				const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
				const endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5);

				const filteredDates = [];

				weatherData.list.forEach(function (item) {
					const itemDate = new Date(item.dt_txt);
					if (itemDate.getDate() === today.getDate()) {
						if (itemDate.getHours() < 15) {
							return;
						} else if (itemDate.getHours() === 15) {
							filteredDates.push(item);
						} else {
							const existingItem = filteredDates.find(
								(e) => new Date(e.dt_txt).getDate() === itemDate.getDate(),
							);
							if (!existingItem) {
								filteredDates.push(item);
							}
						}
					} else {
						if (itemDate.getHours() === 15) {
							if (itemDate >= startDate && itemDate < endDate) {
								filteredDates.push(item);
							}
						}
					}
				});

				console.log(filteredDates);

				const dailyWeather = filteredDates.map((item) => ({
					city: city,
					date: item.dt_txt.split(" ")[0],
					temperature: Math.round(item.main.temp),
					windSpeed: item.wind.speed,
					humidity: item.main.humidity,
					weatherDescription: item.weather[0].main,
				}));

				setWeatherData(dailyWeather);
			} catch (error) {
				console.error("Error fetching weather data:", error);
			}
		};

		fetchData();
	}, [city]);

	useEffect(() => {
		if (weatherData == null) {
			return;
		}
	}, [weatherData]);

	return <WeatherContext.Provider value={weatherData}>{children}</WeatherContext.Provider>;
}

export { WeatherApi, WeatherContext };
