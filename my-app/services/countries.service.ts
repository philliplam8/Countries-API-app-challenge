import { formatKeyValuesFromObject } from "../utils/helpers";

export function getNativeCountryName(nativeNameObject: object): string {
  const length: number = Object.keys(nativeNameObject).length;
  const commonNativeName: string =
    Object.values(nativeNameObject)[length - 1].common;
  return commonNativeName;
}

export function getCurrencies(currenciesObject: object): string {
  if (currenciesObject) {
    // Parse currency name and the symbol
    let currenciesArray: string[] = Object.values(currenciesObject).map(
      (currency) => `${currency.name} (${currency.symbol})`
    );
    // Format currencies into a string
    let stringifiedCurrencies: string = currenciesArray.join(", ");
    return stringifiedCurrencies;
  } else {
    return "";
  }
}

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

  return parsedCountries;
}

//TODO fix param type

export const initialCountry = {
  flagImage: "",
  countryName: "",
  nativeName: "",
  mapsLink: "",
  population: "",
  region: "",
  subRegion: "",
  capital: "",
  topLevelDomain: "",
  currencies: "",
  languages: "",
  borders: [],
};

export function parseCountry(country: any) {
  const EMPTY_VALUE = "";
  const formatProperty = (key: string, formatedProperty: string) => {
    return key in country ? formatedProperty : EMPTY_VALUE;
  };

  let parsedCountry = {
    flagImage: formatProperty("flags", country.flags.svg),
    countryName: formatProperty("name", country.name.common),
    nativeName: formatProperty(
      "name",
      getNativeCountryName(country.name.nativeName)
    ),
    mapsLink: formatProperty("maps", country.maps.googleMaps),
    population: formatProperty(
      "population",
      country.population.toLocaleString()
    ),
    region: formatProperty("region", country.region),
    subRegion: formatProperty("subregion", country.subregion),
    capital: formatProperty("capital", country.capital),
    topLevelDomain: formatProperty("tld", country.tld[0]),
    currencies: formatProperty("currencies", getCurrencies(country.currencies)),
    languages: formatProperty(
      "languages",
      formatKeyValuesFromObject(country.languages)
    ),
    borders: "borders" in country ? country.borders : [],
  };

  return parsedCountry;
}

/**
 * Get the bordering countries that geographically neighbour the current country on the Details page
 * @param countriesArray All data relevant to the countries that border the country on the Details page
 * @returns The name of the countries that border the current country on the Details page
 */
export function parseBorders(countriesArray: string | any[]): string[] {
  let parsedBorders: string[] = [];

  for (let i = 0; i < countriesArray.length; i++) {
    const border = countriesArray[i];
    const borderName = border.name.common;
    parsedBorders[i] = borderName;
  }

  return parsedBorders;
}
