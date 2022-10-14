import { useEffect, useState } from "react";
import { parseBorders } from "../services/countries.service";
import Border from "./Border";

const COUNTRY_CODE_API = "https://restcountries.com/v3.1/alpha?codes=";

export default function BorderGroup(props: { borders: string[] | undefined }) {
  const [borders, setBorders] = useState([""]);

  const myborders = props.borders;
  const bordersCodeString = myborders?.join(",");
  console.log(bordersCodeString);

  useEffect(() => {
    if (bordersCodeString) {
      fetch(`${COUNTRY_CODE_API}${bordersCodeString}`)
        .then((res) => res.json())
        .then((data) => setBorders(parseBorders(data)));
    }
  }, [bordersCodeString]);

  return (
    <div className="flex flex-wrap gap-4">
      <h2 className="my-4 font-semibold text-lg">Border Countries:</h2>
      <div className="flex flex-wrap gap-2 items-center">
        {borders &&
          borders.map((border) => {
            return <Border key={border} countryName={border} />;
          })}
      </div>
    </div>
  );
}
