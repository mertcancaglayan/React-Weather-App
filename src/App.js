import "./App.css";
import Cities from "./components/Cities";
import { CityProvider } from "./context/CityContext";
import { WeatherApi } from "./context/WeatherApi";
import Card from "./components/Card";

function App() {
	return (
		<div className="App">
			<CityProvider>
				<Cities></Cities>
				<WeatherApi>
				<Card></Card>
				</WeatherApi>
			</CityProvider>
		</div>
	);
}

export default App;
