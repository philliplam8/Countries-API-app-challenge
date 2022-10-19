import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import {
  parseCountry,
  initialCountry,
  EMPTY_VALUE,
} from "../services/countries.service";
import BorderGroup from "../components/BorderGroup";
import Field from "../components/Field";
import SkeletionRow from "../components/SkeletonRow";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Skeleton from "@mui/material/Skeleton";
import { CountryDetails } from "../types/types";
import EmptyFlag from "../components/EmptyFlag";

function getCountryFullNameApi(name: string | string[]): string {
  const COUNTRY_FULLNAME_API = `https://restcountries.com/v3.1/name/${name}?fullText=true`;
  return COUNTRY_FULLNAME_API;
}

const Details: NextPage = () => {
  const route = useRouter();
  const country = route.query["country"];

  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [countryData, setCountryData] =
    useState<CountryDetails>(initialCountry);
  const [error, setError] = useState(false);

  const backButtonHandler = () => {
    route.push(`/`);
  };

  useEffect(() => {
    setLoading(true);

    if (country) {
      const COUNTRY_FULLNAME_API = getCountryFullNameApi(country);
      fetch(COUNTRY_FULLNAME_API)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          const countryObject = data[0];
          const parsedCountry = parseCountry(countryObject);
          setCountryData(parsedCountry);
        })
        .catch(() => {
          console.log("Country not found");
          setError(true);
        });
    }
  }, [country]);

  if (error) {
    route.push("/404");
  }

  return (
    <div
      className={`max-w-[640px] lg:max-w-[1024px] m-auto py-10 ${
        darkMode ? "text-white" : "text-very-dark-blue-lm"
      }`}
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
        <div className="h-full lg:w-full">
          {isLoading ? (
            <Skeleton
              animation="wave"
              variant="rounded"
              width="100%"
              className={`w-full ${darkMode ? "bg-dark-blue" : "bg-white"}`}
            >
              <div style={{ paddingTop: "100%" }} />
            </Skeleton>
          ) : countryData.flagImage === EMPTY_VALUE ? (
            <EmptyFlag />
          ) : (
            <img
              src={countryData.flagImage}
              alt={`${countryData.countryName} flag`}
              className={"w-full"}
            />
          )}
        </div>

        <div className="country w-full">
          {isLoading ? (
            <SkeletionRow width="100%" />
          ) : (
            <div className="flex flex-row gap-2 items-center">
              <h1 className="my-5 font-extrabold text-3xl">
                {countryData.countryName}
              </h1>
              <a target="_blank" href={countryData.mapsLink}>
                <LocationOnIcon />
              </a>
            </div>
          )}

          {isLoading ? (
            <div>
              <div className="flex flex-row gap-2">
                <SkeletionRow width="30%" />
                <SkeletionRow width="70%" />
              </div>
              <SkeletionRow width="100%" />
            </div>
          ) : (
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
          )}

          {isLoading ? (
            <div className="flex flex-row gap-2">
              <SkeletionRow width="300px" />
              <SkeletionRow width="100%" />
            </div>
          ) : (
            <BorderGroup borders={countryData.borders} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
