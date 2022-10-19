import { useContext } from "react";
import { useRouter } from "next/router";
import { DarkModeContext } from "../context/DarkModeContext";
import Field from "../components/Field";
import { EMPTY_VALUE } from "../services/countries.service";
import { CountryCard } from "../types/types";
import EmptyFlag from "./EmptyFlag";

const MESSAGE_NO_VALUE = "None";

export default function Card(props: CountryCard) {
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
      <div className="flex justify-center h-[200px] shadow-sm rounded-t-lg">
        {props.flagImage === EMPTY_VALUE ? (
          <EmptyFlag />
        ) : (
          <img
            src={props.flagImage}
            className="object-contain h-full rounded-t-lg"
            alt={`${props.countryName} flag`}
          />
        )}
      </div>

      <div className="card-details mx-7 my-6">
        <h2 className="font-extrabold my-4 text-lg text-left">
          {props.countryName}
        </h2>

        <div className="card-country-details flex flex-col gap-1 text-sm">
          <Field fieldName="Population:" fieldValue={props.population} />
          <Field fieldName="Region:" fieldValue={props.region} />
          <Field
            fieldName="Capital:"
            fieldValue={props.capital ? props.capital : MESSAGE_NO_VALUE}
          />
        </div>
      </div>
    </div>
  );
}
