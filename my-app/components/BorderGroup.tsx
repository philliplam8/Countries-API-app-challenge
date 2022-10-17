import { useEffect, useState } from "react";
import { parseBorders } from "../services/countries.service";
import Border from "./Border";

const COUNTRY_CODE_API = "https://restcountries.com/v3.1/alpha?codes=";
const MESSAGE_NO_BORDERS = "None";

export default function BorderGroup(props: { borders: string[] | undefined }) {
  const initialBorders: string[] = [];
  const [borders, setBorders] = useState(initialBorders);

  const myborders = props.borders;
  const bordersCodeString = myborders?.join(",");

  useEffect(() => {
    if (bordersCodeString) {
      fetch(`${COUNTRY_CODE_API}${bordersCodeString}`)
        .then((res) => res.json())
        .then((data) => {
          setBorders(parseBorders(data));
        });
    }
  }, [bordersCodeString]);

  return (
    <div className="flex flex-wrap gap-4">
      <h2 className="my-4 font-semibold text-lg">Border Countries:</h2>
      <div className="flex flex-wrap gap-2 items-center">
        {borders.length === 0
          ? MESSAGE_NO_BORDERS
          : borders.map((border) => {
              return <Border key={border} countryName={border} />;
            })}
      </div>
    </div>
  );
}
