import { useContext, useEffect, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import CheckIcon from "@mui/icons-material/Check";
import { DarkModeContext } from "../context/DarkModeContext";
import { CountriesContext } from "../context/CountriesContext";
import { parseCountries } from "../services/countries.service";

const COUNTRY_REGION_API = "https://restcountries.com/v3.1/region/";
const dropdownItems = [
  { label: "Africa" },
  { label: "Asia" },
  { label: "America" },
  { label: "Europe" },
  { label: "Oceania" },
];

export function TailwindDropdown() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const { countriesValue, keywordValue, regionValue, loadingValue } =
    useContext(CountriesContext);
  const [countries, setCountries] = countriesValue;
  const [keyword, setKeyword] = keywordValue;
  const [region, setRegion] = regionValue;
  const [isLoading, setLoading] = loadingValue;

  const handleRegionChange = (newRegion: string) => {
    newRegion === region ? setRegion("") : setRegion(newRegion);
    // Clear keyword input
    setKeyword("");
  };

  useEffect(() => {
    if (region) {
      setLoading(true);
      fetch(`${COUNTRY_REGION_API}${region}`)
        .then((res) => res.json())
        .then((data) => {
          let parsedCountries = parseCountries(data);
          setCountries(parsedCountries);
          setLoading(false);
        })
        .catch((error) => console.error(error));
    }
  }, [region]);

  return (
    <Menu
      as="div"
      className={`relative inline-block text-left rounded-lg shadow-md ${
        darkMode ? "bg-dark-blue" : "bg-white"
      }`}
    >
      <Menu.Button
        className="h-[60px] w-full inline-flex justify-center items-center px-8 py-4 text-md font-medium shadow-md rounded-lg 
        focus:outline-none focus:rounded-lg focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
      >
        {region ? `${region} Region` : "Filter by Region"}

        <ChevronDownIcon className="-mr-1 ml-2 h-6 w-5" aria-hidden="true" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`absolute z-10 mt-2 w-full sm:w-inherit origin-top-right rounded-md shadow-lg ${
            darkMode ? "bg-dark-blue" : "bg-white"
          }`}
        >
          <div className="py-2">
            {dropdownItems.map((item) => (
              <Menu.Item as={Fragment} key={item.label}>
                {({ active }) => (
                  <button
                    className={`flex items-center justify-start gap-2 w-full px-4 py-3 text-sm 
                    ${
                      darkMode
                        ? active && "bg-blue-gray"
                        : active && "bg-light-gray"
                    }
                    ${region === item.label && "font-semibold"}`}
                    onClick={() => {
                      handleRegionChange(item.label);
                    }}
                  >
                    {item.label}
                    {region === item.label && <CheckIcon className="text-sm" />}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
