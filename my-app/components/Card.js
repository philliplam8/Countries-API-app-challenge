import { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext.tsx";
import { useRouter } from "next/router";

export default function Card(props) {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const route = useRouter();

  const cardClickHandler = () => {
    route.push(`/details?country=${props.countryName}`);
  };

  return (
    <div
      className={`h-[350px] w-[300px] rounded-lg shadow-md cursor-pointer
      ${darkMode ? "text-white bg-dark-blue" : "text-very-dark-blue-lm bg-white"}`}
      onClick={cardClickHandler}
    >
      <div className="card-image">
        <img src={props.flagImage} />
      </div>

      <div className="card-details m-6">
        <h2 className="font-extrabold my-4 text-lg">{props.countryName}</h2>
        <div className="card-country-details flex flex-col gap-1 text-sm">
          <div className="flex gap-1">
            <h3 className="font-semibold">Population:</h3>
            <p>{props.population}</p>
          </div>
          <div className="flex gap-1">
            <h3 className="font-semibold">Region:</h3>
            <p>{props.region}</p>
          </div>
          <div className="flex gap-1">
            <h3 className="font-semibold">Capital: </h3>
            <p>{props.capital}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
