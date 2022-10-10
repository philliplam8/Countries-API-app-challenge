import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "../DarkModeContext";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const COUNTRY_API = "https://restcountries.com/v3.1/name/";

const Details: NextPage = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const [isLoading, setLoading] = useState(false);
  const [countryData, setCountryData] = useState({});

  const route = useRouter();
  const country = route.query["country"];

  useEffect(() => {
    setLoading(true);

    if (country) {
      fetch(`${COUNTRY_API}${country}`)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setCountryData({
            flagImage: data[0].flags.svg,
            // nativeName: data[0].name.nativeName.eng.official,
            population: data[0].population,
            region: data[0].region,
            subRegion: data[0].subregion,
            capital: data[0].capital[0],
            topLevelDomain: data[0].tld[0],
            currencies: 'todo',
            languages: 'todo'
          });
          console.log(data);
        });
    }
  }, [country]);

  const backHandler = () => {
    route.push(`/`);
  };

  return (
    <div className="py-6">
      <button
        className={`h-[40px] w-[140px] bg:[white] flex flex-row justify-center items-center gap-2 rounded-lg shadow-lg  ${
          darkMode
            ? "text-white bg-dark-blue"
            : "text-very-dark-blue-lm bg-white"
        }`}
        onClick={backHandler}
      >
        <KeyboardBackspaceIcon />
        Back
      </button>

      <div>
        <img src={countryData.flagImage} className="" />
      </div>
      <h1 className="my-4 font-extrabold text-lg">{country}</h1>

      <div id="country-details" className="flex flex-col sm:flex-row gap-5 justify-between">
        <div id="country-details-main">
          <div className="flex gap-1">
            <h3 className="font-semibold">Native Name:</h3>
            <p>{countryData.nativeName}</p>
          </div>
          <div className="flex gap-1">
            <h3 className="font-semibold">Population:</h3>
            <p>{countryData.population}</p>
          </div>
          <div className="flex gap-1">
            <h3 className="font-semibold">Region:</h3>
            <p>{countryData.region}</p>
          </div>
          <div className="flex gap-1">
            <h3 className="font-semibold">Sub Region:</h3>
            <p>{countryData.subRegion}</p>
          </div>
          <div className="flex gap-1">
            <h3 className="font-semibold">Capital:</h3>
            <p>{countryData.capital}</p>
          </div>
        </div>
        <div>
          <div className="flex gap-1">
            <h3 className="font-semibold">Top Level Domain:</h3>
            <p>{countryData.topLevelDomain}</p>
          </div>
          <div className="flex gap-1">
            <h3 className="font-semibold">Currencies:</h3>
            <p>{countryData.currencies}</p>
          </div>
          <div className="flex gap-1">
            <h3 className="font-semibold">Languages:</h3>
            <p>{countryData.languages}</p>
          </div>
        </div>
      </div>

      <div className="flex">
        <h2 className="my-4 font-semibold text-lg">Border Countries</h2>
        {/* Border Country Buttons here... */}
      </div>
    </div>
  );
};

export default Details;
