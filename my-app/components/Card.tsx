import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { useRouter } from "next/router";
import Field from "../components/Field";
import { Country } from "../types/types";

export default function Card(props: Country) {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const route = useRouter();

  const goToCountry = () => route.push(`/details?country=${props.countryName}`);

  const handleCardClick = () => {
    goToCountry();
  };

  const handleKeyDown = (e: { key: string }) => {
    if (e.key === "Enter") {
      goToCountry();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className={`h-[390px] w-[300px] rounded-lg shadow-md cursor-pointer
      ${darkMode ? "bg-dark-blue" : "bg-white"}`}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
    >
      <div className="card-image h-[200px] shadow-sm rounded-t-lg">
        <img
          src={props.flagImage}
          className="h-full w-[300px] object-fit rounded-t-lg"
          alt={`${props.countryName} flag`}
        />
      </div>

      <div className="card-details mx-7 my-6">
        <h2 className="font-extrabold my-4 text-lg text-left">
          {props.countryName}
        </h2>

        <div className="card-country-details flex flex-col gap-1 text-sm">
          <Field fieldName="Population:" fieldValue={props.population} />
          <Field fieldName="Region:" fieldValue={props.region} />
          <Field fieldName="Capital:" fieldValue={props.capital} />
        </div>
      </div>
    </div>
  );
}
