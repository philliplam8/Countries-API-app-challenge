export interface CountryName {
  countryName: string;
}

export interface Country {
  key?: string;
  flagImage: string;
  countryName: string;
  nativeName?: string;
  population: string;
  region: string;
  subRegion?: string;
  capital: string;
  topLevelDomain?: string;
  currencies?: string;
  languages?: string;
  borders?: string[];
}

export interface ReadOnlyField {
  fieldName: string;
  fieldValue: string;
}
