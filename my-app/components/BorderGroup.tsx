import { useState } from "react";
import { Country } from "../types/types";
import Border from "./Border";

const COUNTRY_CODE_API = "https://restcountries.com/v3.1/alpha/";

// async function CountryBorders(bordersArray: string[]) {
//   let borderCountries: string[] = [];

//   for (let i = 0; i < bordersArray.length; i++) {
//     borderCountries[i] = await getCountryNameFromCode(bordersArray[i]);
//   }
//   console.log({ borderCountries });
//   return borderCountries;
// }

export default function BorderGroup(props: { borders: string[] | undefined }) {
  console.log(props.borders);
  const [borders, setBorders] = useState([]);
  // setBorders(props.borders);

  const myborders = props.borders;
  console.log({ myborders });

  // TODO return Type
  const getCountryNameFromCode = (code: string) => {
    fetch(`${COUNTRY_CODE_API}${code}`)
      .then((res) => res.json())
      .then((data) => {
        setBorders(data[0].name.common);
        return data[0].name.common;
      });
  };

  return (
    <div className="flex lg:flex-row flex-col gap-4">
      <h2 className="my-4 font-semibold text-lg">Border Countries:</h2>
      <div className="flex flex-wrap gap-2 items-center">
        {/* {getCountryNameFromCode(props.borders)} */}
        {myborders &&
          myborders.map((border) => {
            return <Border countryName={border} />;
          })}
      </div>
    </div>
  );
}
