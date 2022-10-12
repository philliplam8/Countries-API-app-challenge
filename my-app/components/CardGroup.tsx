import { useContext } from "react";
import { CountriesContext } from "../CountriesContext";
import Card from "./Card";
import { Country } from "../types/types";

export default function CardGroup() {
  const { countriesValue } = useContext(CountriesContext);
  const [countries, setCountries] = countriesValue;

  return (
    <div className="py-5 flex flex-row flex-wrap justify-center align-items gap-10">
      {countries.map((country: Country) => {
        return (
          <Card
            key={country.key}
            flagImage={country.flagImage}
            countryName={country.countryName}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        );
      })}
    </div>
  );
}
