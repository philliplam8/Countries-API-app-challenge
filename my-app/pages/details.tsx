import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "../DarkModeContext";
import { parseCountry, initialCountry } from "../services/countries.service";
import BorderGroup from "../components/BorderGroup";
import Field from "../components/Field";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Country } from "../types/types";

const COUNTRY_NAME_API = "https://restcountries.com/v3.1/name/";

const Details: NextPage = () => {
  const route = useRouter();
  const country = route.query["country"];

  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [countryData, setCountryData] = useState<Country>(initialCountry); // potential for skeleton loading

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
          setCountryData(parseCountry(countryObject));
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
        <div className="h-full w-full max-w-full lg:max-w-[500px]">
          <img
            src={countryData.flagImage}
            alt={`${countryData.countryName} flag`}
            className={""}
          />
        </div>

        <div className="country">
          <div className="flex flex-row gap-2 items-center">
            <h1 className="my-5 font-extrabold text-2xl">
              {countryData.countryName}
            </h1>
            <a target="_blank" href={countryData.mapsLink}>
              <LocationOnIcon />
            </a>
          </div>

          <div
            id="country-details"
            className="flex flex-col sm:flex-row gap-7 justify-between mb-5"
          >
            <div id="country-details-main" className="flex flex-col gap-2">
              <Field
                fieldName="Native Name:"
                fieldValue={
                  countryData.nativeName ? countryData.nativeName : ""
                }
              />
              <Field
                fieldName="Population:"
                fieldValue={
                  countryData.population ? countryData.population : ""
                }
              />
              <Field
                fieldName="Region:"
                fieldValue={countryData.region ? countryData.region : ""}
              />
              <Field
                fieldName="Sub Region:"
                fieldValue={countryData.subRegion ? countryData.subRegion : ""}
              />
              <Field
                fieldName="Capital:"
                fieldValue={countryData.capital ? countryData.capital : ""}
              />
            </div>

            <div id="column2" className="flex flex-col gap-2">
              <Field
                fieldName="Top Level Domain:"
                fieldValue={
                  countryData.topLevelDomain ? countryData.topLevelDomain : ""
                }
              />
              <Field
                fieldName="Currencies:"
                fieldValue={
                  countryData.currencies ? countryData.currencies : ""
                }
              />
              <Field
                fieldName="Languages:"
                fieldValue={countryData.languages ? countryData.languages : ""}
              />
            </div>
          </div>

          <BorderGroup borders={countryData.borders} />
        </div>
      </div>
    </div>
  );
};

export default Details;
