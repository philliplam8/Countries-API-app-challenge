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

  // TODO return Type
  const getCountryNameFromCode = (code: string) => {
    fetch(`${COUNTRY_CODE_API}${code}`)
      .then((res) => res.json())
      .then((data) => {
        return data[0].name.common;
      });
  };

  return (
    <div className="flex gap-2">
      {/* {getCountryNameFromCode(props.borders)} */}
      <Border countryName="CountryBorder" />
      <Border countryName="CountryBorder" />
    </div>
  );
}
