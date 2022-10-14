import { useContext } from "react";
import { CountriesContext } from "../context/CountriesContext";
import Card from "./Card";
import { Country } from "../types/types";
import SkeletonCard from "./SkeletonCard";

export default function CardGroup(props: any) {
  const { countriesValue, loadingValue } = useContext(CountriesContext);
  const [countries, setCountries] = countriesValue;
  const [isLoading, setIsLoading] = loadingValue;

  return (
    <div>
      {isLoading ? (
        <div className="py-5 flex flex-row flex-wrap justify-center align-items gap-10">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      ) : (
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
      )}
    </div>
  );
}
