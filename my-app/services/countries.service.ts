import { CountryDetails } from "../types/types";
import { getKeyValuesFromObject } from "../utils/helpers";

export const EMPTY_VALUE = "None";

export const initialCountry = {
  flagImage: EMPTY_VALUE,
  countryName: EMPTY_VALUE,
  nativeName: EMPTY_VALUE,
  mapsLink: EMPTY_VALUE,
  population: EMPTY_VALUE,
  region: EMPTY_VALUE,
  subRegion: EMPTY_VALUE,
  capital: EMPTY_VALUE,
  topLevelDomain: EMPTY_VALUE,
  currencies: EMPTY_VALUE,
  languages: EMPTY_VALUE,
  borders: [],
};

/**
 * Get the native common name of the country
 * @param nativeNameObject native names of the country
 * @returns the native common name of the country
 */
export function getNativeCountryName(nativeNameObject: object): string {
  const length: number = Object.keys(nativeNameObject).length;
  const commonNativeName: string =
    Object.values(nativeNameObject)[length - 1].common;
  return commonNativeName;
}

/**
 * Get the name and symbol of all currencies used by the country
 * @param currenciesObject currency of country provided by the Countries REST API
 * @returns A stringified version of the currency/curriences from the country
 */
export function getCountryCurrencies(currenciesObject: object): string {
  // Parse currency name and the symbol
  let currenciesArray: string[] = Object.values(currenciesObject).map(
    (currency) => `${currency.name} (${currency.symbol})`
  );
  // Format currencies into a string
  let stringifiedCurrencies: string = currenciesArray.join(", ");
  return stringifiedCurrencies;
}

/**
 * Get all countries from the Countries REST API: ALL endpoint
 * @param data Raw data returned from the Countries REST API: ALL endpoint
 * @returns A parsed version of all countries including their flag image,
 *          country name, population, region, and capital.
 */
export function parseCountries(data: string | any[]) {
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

/**
 * Get an individual country data from the Countries REST API: Name endpoint
 * @param country Raw country data returned from the Countries REST API: Name endpoint
 * @returns A parsed version of the country's data including their flag image, common name,
 *          native name, GoogleMaps link, population, region, sub-region, capital city,
 *          top level domain, currencies, languages, and bordering countries.
 */
export function parseCountry(country: {
  flags: { svg: string };
  name: { common: string; nativeName: object };
  maps: { googleMaps: string };
  population: number;
  region: string;
  subRegion: string;
  capital: string;
  tld: string[];
  currencies: object;
  languages: object;
  borders: string[];
}): CountryDetails {
  // Ensure the key exists for the country before getting key value
  const getFlagImage = () => {
    return country.flags.svg ? country.flags.svg : EMPTY_VALUE;
  };

  const getCountryName = () => {
    return country.name.common ? country.name.common : EMPTY_VALUE;
  };

  const getNativeName = () => {
    return country.name.nativeName
      ? getNativeCountryName(country.name.nativeName)
      : EMPTY_VALUE;
  };

  const getMapsLink = () => {
    return country.maps.googleMaps ? country.maps.googleMaps : EMPTY_VALUE;
  };

  const getPopulation = () => {
    return country.population
      ? country.population.toLocaleString()
      : EMPTY_VALUE;
  };

  const getRegion = () => {
    return country.region ? country.region : EMPTY_VALUE;
  };

  const getSubRegion = () => {
    return country.subRegion ? country.subRegion : EMPTY_VALUE;
  };

  const getCapital = () => {
    return country.capital ? country.capital : EMPTY_VALUE;
  };

  const getTopLevelDomain = () => {
    return country.tld[0] ? country.tld[0] : EMPTY_VALUE;
  };

  const getCurrencies = () => {
    return country.currencies
      ? getCountryCurrencies(country.currencies)
      : EMPTY_VALUE;
  };

  const getLanguages = () => {
    return country.languages
      ? getKeyValuesFromObject(country.languages)
      : EMPTY_VALUE;
  };

  const getBorders = () => {
    return country.borders ? country.borders : [];
  };

  let parsedCountry = {
    flagImage: getFlagImage(),
    countryName: getCountryName(),
    nativeName: getNativeName(),
    mapsLink: getMapsLink(),
    population: getPopulation(),
    region: getRegion(),
    subRegion: getSubRegion(),
    capital: getCapital(),
    topLevelDomain: getTopLevelDomain(),
    currencies: getCurrencies(),
    languages: getLanguages(),
    borders: getBorders(),
  };

  return parsedCountry;
}

/**
 * Get the bordering countries that geographically neighbour the current country on the Details page
 * @param countriesArray All data relevant to the countries that border the country on the Details page
 * @returns The name of the countries that border the current country on the Details page
 */
export function parseBorders(countriesArray: any[]): string[] {
  let parsedBorders: string[] = [];

  for (let i = 0; i < countriesArray.length; i++) {
    const border = countriesArray[i];
    const borderName = border.name.common;
    parsedBorders[i] = borderName;
  }

  return parsedBorders;
}
