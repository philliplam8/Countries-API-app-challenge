export interface ReadOnlyField {
  fieldName: string;
  fieldValue: string;
}

export interface CountryName {
  countryName: string;
}

export interface CountryCard extends CountryName {
  key?: string;
  flagImage: string;
  population: string;
  region: string;
  capital: string;
}

export interface CountryDetails extends CountryCard {
  nativeName: string;
  mapsLink: string;
  subRegion: string;
  topLevelDomain: string;
  currencies: string;
  languages: string;
  borders: string[];
}
