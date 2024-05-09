import "./App.css";
import Cities from "./components/Cities";
import { CityProvider } from "./context/CityContext";

function App() {
	return (
		<div className="App">
			<CityProvider>
				<Cities></Cities>
			</CityProvider>
		</div>
	);
}

export default App;
