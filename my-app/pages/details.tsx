import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "../DarkModeContext";
import { getCommonCountryNativeName } from "../services/countries.service";
import { getAllKeys, getAllKeyValues } from "../utils/helpers";
import BorderGroup from "../components/BorderGroup";
import Field from "../components/Field";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Country } from "../types/types";

const COUNTRY_NAME_API = "https://restcountries.com/v3.1/name/";

const Details: NextPage = () => {
  const route = useRouter();
  const country = route.query["country"];

  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [countryData, setCountryData] = useState<Country>({}); // potential for lazy

  const backButtonHandler = () => {
    route.push(`/`);
  };

  useEffect(() => {
    setLoading(true);

    if (country) {
      fetch(`${COUNTRY_NAME_API}${country}`)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);

          const countryObject = data[0];
          setCountryData({
            flagImage: countryObject.flags.svg,
            countryName: countryObject.name.common,
            nativeName: getCommonCountryNativeName(
              countryObject.name.nativeName
            ),
            population: countryObject.population.toLocaleString(),
            region: countryObject.region,
            subRegion: countryObject.subregion,
            capital: countryObject.capital[0],
            topLevelDomain: countryObject.tld[0],
            currencies: getAllKeys(countryObject.currencies),
            languages: getAllKeyValues(countryObject.languages),
            borders: countryObject.borders,
          });
        });
    }
  }, [country]);

  return (
    <div
      className={`py-10 ${darkMode ? "text-white" : "text-very-dark-blue-lm"}`}
    >
      <button
        className={`h-[40px] w-[140px] mb-20 bg:[white] flex flex-row justify-center items-center gap-2 rounded-lg shadow-lg  ${
          darkMode ? "bg-dark-blue" : "bg-white"
        }`}
        onClick={backButtonHandler}
      >
        <KeyboardBackspaceIcon />
        Back
      </button>

      <div className="flex flex-col lg:flex-row gap-12 justify-center">
        <div className="">
          <img src={countryData.flagImage} className="max-h-[400px]" />
        </div>

        <div className="">
          <h1 className="my-5 font-extrabold text-2xl">
            {countryData.countryName}
          </h1>

          <div
            id="country-details"
            className="flex flex-col sm:flex-row gap-7 justify-between mb-5"
          >
            <div id="country-details-main" className="flex flex-col gap-2">
              <Field
                fieldName="Native Name:"
                fieldValue={countryData.nativeName}
              />
              <Field
                fieldName="Population:"
                fieldValue={countryData.population}
              />
              <Field fieldName="Region:" fieldValue={countryData.region} />
              <Field
                fieldName="Sub Region:"
                fieldValue={countryData.subRegion}
              />
              <Field fieldName="Capital:" fieldValue={countryData.capital} />
            </div>

            <div id="column2" className="flex flex-col gap-2">
              <Field
                fieldName="Top Level Domain:"
                fieldValue={countryData.topLevelDomain}
              />
              <Field
                fieldName="Currencies:"
                fieldValue={countryData.currencies}
              />
              <Field
                fieldName="Languages:"
                fieldValue={countryData.languages}
              />
            </div>
          </div>

          {/* Border Country Buttons here... */}
          {/* TODO */}
          <BorderGroup borders={countryData.borders} />
        </div>
      </div>
    </div>
  );
};

export default Details;
