import React, { createContext, useState, useContext } from "react";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
	const [selectCity, setSelectedCity] = useState("");

	const values = {
		selectCity,
		setSelectedCity,
	};


	return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};

export const useCity = () => useContext(CityContext);
