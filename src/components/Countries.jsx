import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Countries() {
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await response.json();
    setCountries(data);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <ul>
      {countries.map((country) => {
				console.log(country);
        return (
          <Link to={`/countries/${country.alpha3Code}`}>
            <li key={country.name}>{country.name}</li>
          </Link>
        );
      })}
    </ul>
  );
}
