import "./App.css";
import Cities from "./components/Cities";
import { CityProvider } from "./context/CityContext";
import CardGallery from "./components/CardGallery";

function App() {
	return (
		<div className="App">
			<CityProvider>
				<Cities></Cities>
				<CardGallery></CardGallery>
			</CityProvider>

		</div>
	);
}

export default App;
