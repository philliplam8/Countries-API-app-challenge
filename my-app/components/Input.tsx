import { useContext, useEffect } from "react";
import { CountriesContext } from "../CountriesContext";
import { DarkModeContext } from "../DarkModeContext";
import { parseCountries } from "../services/countries.service";
import SearchIcon from "@mui/icons-material/Search";

const COUNTRY_NAME_API = "https://restcountries.com/v3.1/name/";

export default function Input() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const { countriesValue, keywordValue, loadingValue } =
    useContext(CountriesContext);
  const [countries, setCountries] = countriesValue;
  const [keyword, setKeyword] = keywordValue;
  const [isLoading, setLoading] = loadingValue;

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newKeyword: string = e.target.value;
    setKeyword(newKeyword);
  };

  // TODO
  useEffect(() => {
    if (keyword) {
      setLoading(true);
      fetch(`${COUNTRY_NAME_API}${keyword}`)
        .then((res) => res.json())
        .then((data) => {
          let parsedCountries = parseCountries(data);
          setCountries(parsedCountries);
          setLoading(false);
        })
        .catch((error) => console.error(error));
    }
  }, [keyword]);

  return (
    <div
      className={`h-[60px] w-[350px] px-7 flex gap-2 align-items items-center shadow-md rounded-lg ${
        darkMode ? "bg-dark-blue" : "bg-white"
      }`}
    >
      <SearchIcon className="text-gray-400" />
      <input
        type="text"
        id="search"
        name="search"
        placeholder={`Search for a country...`}
        className={`w-full focus:outline-none ${
          darkMode ? "bg-dark-blue" : "bg-white"
        }`}
        onChange={inputHandler}
      />
    </div>
  );
}
