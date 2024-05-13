import React from "react";
import "./Cities.css"
import { useFormik } from "formik";
import { useCity } from "../context/CityContext";

const Cities = () => {
	const { setSelectedCity } = useCity();

	
	const { values } = useFormik({
		initialValues: {
			selectedCity: "İstanbul",
		},
	});

	const handleCityChange = (event) => {
		const selectedCity = event.target.value;
		setSelectedCity(selectedCity);
	};

	const cities = [
		"Adana",
		"Adıyaman",
		"Afyonkarahisar",
		"Ağrı",
		"Amasya",
		"Ankara",
		"Antalya",
		"Ardahan",
		"Artvin",
		"Aydın",
		"Balıkesir",
		"Bartın",
		"Batman",
		"Bayburt",
		"Bilecik",
		"Bingöl",
		"Bitlis",
		"Bolu",
		"Burdur",
		"Bursa",
		"Çanakkale",
		"Çankırı",
		"Çorum",
		"Denizli",
		"Diyarbakır",
		"Düzce",
		"Edirne",
		"Elazığ",
		"Erzincan",
		"Erzurum",
		"Eskişehir",
		"Gaziantep",
		"Giresun",
		"Gümüşhane",
		"Hakkari",
		"Hatay",
		"Iğdır",
		"Isparta",
		"İstanbul",
		"İzmir",
		"Kahramanmaraş",
		"Karabük",
		"Karaman",
		"Kars",
		"Kastamonu",
		"Kayseri",
		"Kilis",
		"Kırıkkale",
		"Kırklareli",
		"Kırşehir",
		"Kocaeli",
		"Konya",
		"Kütahya",
		"Malatya",
		"Manisa",
		"Mardin",
		"Mersin",
		"Muğla",
		"Muş",
		"Nevşehir",
		"Niğde",
		"Ordu",
		"Osmaniye",
		"Rize",
		"Sakarya",
		"Samsun",
		"Siirt",
		"Sinop",
		"Sivas",
		"Şanlıurfa",
		"Şırnak",
		"Tekirdağ",
		"Tokat",
		"Trabzon",
		"Tunceli",
		"Uşak",
		"Van",
		"Yalova",
		"Yozgat",
		"Zonguldak",
	];

	return (
		<form className="selection">
			<h2>Choose City</h2>
			<select className="select-box" name="selectedCity" onChange={handleCityChange}>
				{cities.map((city, index) => (
					<option className="select-box__option" key={index} value={city}>
						{city}
					</option>
				))}
			</select>
		</form>
	);
};

export default Cities;
