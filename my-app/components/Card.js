import { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";

export default function Card(props) {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  return (
    <div
      className={`h-[350px] w-[300px] rounded-lg shadow-md ${
        darkMode ? "text-white bg-dark-blue" : "text-very-dark-blue-lm"
      }`}
    >
      <div className="card-image h-[150px] w-[150px]"></div>

      <div className="card-details m-6">
        <h2 className="font-extrabold my-4 text-lg">Germany</h2>
        <div className="card-country-details flex flex-col gap-1 text-sm">
          <div className="flex gap-1">
            <h3 className="font-semibold">Population:</h3>
            <p>{props.population}81,000,000</p>
          </div>
          <div className="flex gap-1">
            <h3 className="font-semibold">Region:</h3>
            <p>{props.region}Europe</p>
          </div>
          <div className="flex gap-1">
            <h3 className="font-semibold">Capital: </h3>
            <p>{props.capital}Berlin</p>
          </div>
        </div>
      </div>
    </div>
  );
}
