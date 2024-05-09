import React from "react";
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
		"Artvin",
		"Aydın",
		"Balıkesir",
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
		"Isparta",
		"Mersin",
		"İstanbul",
		"İzmir",
		"Kars",
		"Kastamonu",
		"Kayseri",
		"Kırklareli",
		"Kırşehir",
		"Kocaeli",
		"Konya",
		"Kütahya",
		"Malatya",
		"Manisa",
		"Kahramanmaraş",
		"Mardin",
		"Muğla",
		"Muş",
		"Nevşehir",
		"Niğde",
		"Ordu",
		"Rize",
		"Sakarya",
		"Samsun",
		"Siirt",
		"Sinop",
		"Sivas",
		"Tekirdağ",
		"Tokat",
		"Trabzon",
		"Tunceli",
		"Şanlıurfa",
		"Uşak",
		"Van",
		"Yozgat",
		"Zonguldak",
		"Aksaray",
		"Bayburt",
		"Karaman",
		"Kırıkkale",
		"Batman",
		"Şırnak",
		"Bartın",
		"Ardahan",
		"Iğdır",
		"Yalova",
		"Karabük",
		"Kilis",
		"Osmaniye",
		"Düzce",
	];

	return (
		<form>
			<h2>Cities</h2>
			<select name="selectedCity" onChange={handleCityChange}>
				{cities.map((city, index) => (
					<option key={index} value={city}>
						{city}
					</option>
				))}
			</select>
		</form>
	);
};

export default Cities;
