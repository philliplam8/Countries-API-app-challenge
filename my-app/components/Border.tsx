import { useRouter } from "next/router";
import { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";
import { CountryName } from "../types/types";

export default function Border(props: CountryName): JSX.Element {
  const route = useRouter();
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  const borderClickHandler = () => {
    console.log("Clicked on border country");
    // route.push(`/details?country=${props.countryName}`);
  };

  return (
    <button
      className={`h-[40px] w-[140px] bg:[white] flex flex-row justify-center items-center gap-2 rounded-lg shadow-lg  ${
        darkMode ? "bg-dark-blue" : "bg-white"
      }`}
      onClick={borderClickHandler}
    >
      {props.countryName}
    </button>
  );
}
