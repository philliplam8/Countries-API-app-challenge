import { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";
import { useRouter } from "next/router";
import Field from "../components/Field";
import { Country } from "../types/types";

export default function Card(props: Country) {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const route = useRouter();

  const cardClickHandler = () => {
    route.push(`/details?country=${props.countryName}`);
  };

  return (
    <div
      className={`h-[390px] w-[300px] rounded-lg shadow-md cursor-pointer
      ${
        darkMode ? "text-white bg-dark-blue" : "text-very-dark-blue-lm bg-white"
      }`}
      onClick={cardClickHandler}
    >
      <div className="card-image h-[200px] shadow-sm">
        <img
          src={props.flagImage}
          className="h-full w-[300px] object-fit rounded-t-lg"
        />
      </div>

      <div className="card-details mx-7 my-6">
        <h2 className="font-extrabold my-4 text-lg">{props.countryName}</h2>
        <div className="card-country-details flex flex-col gap-1 text-sm">
          <Field fieldName="Population:" fieldValue={props.population} />
          <Field fieldName="Region:" fieldValue={props.region} />
          <Field fieldName="Capital:" fieldValue={props.capital} />
        </div>
      </div>
    </div>
  );
}
