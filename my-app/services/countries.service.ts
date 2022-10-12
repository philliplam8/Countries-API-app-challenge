import { useContext, useState } from "react";
import { CountriesContext } from "../CountriesContext";

const ALL_COUNTRIES_API = "https://restcountries.com/v3.1/all";
const COUNTRY_NAME_API = "https://restcountries.com/v3.1/name/";

// TODO Typescript
/**
 *
 * @param data
 * @returns
 */

export function parseCountries(data: [any]) {
  let parsedCountries = [];

  for (let i = 0; i < data.length; i++) {
    const country = data[i];
    parsedCountries[i] = {
      key: country.name.common,
      flagImage: country.flags.svg,
      countryName: country.name.common,
      population: country.population.toLocaleString(),
      region: country.region,
      capital: country.capital,
    };
  }

  console.log({ parseCountries });
  return parsedCountries;
}

// function getCountriesArrayFromCountriesAPI(api: string): void {
//   fetch(api)
//     .then((res) => res.json())
//     .then((data) => {
//       let parsedCountries = parseCountries(data);
//       setCountries(parsedCountries);
//     });
// }

// export function getAllCountries(): void {
//   getCountriesArrayFromCountriesAPI(ALL_COUNTRIES_API);
// }

// export function getCountriesFromSearch(keyword: string): void {
//   getCountriesArrayFromCountriesAPI(`${COUNTRY_NAME_API}${keyword}`);
// }

export function getCommonCountryNativeName(nativeNameObject: object): string {
  const length: number = Object.keys(nativeNameObject).length;
  const commonNativeName: string =
    Object.values(nativeNameObject)[length - 1].common;
  return commonNativeName;
}
