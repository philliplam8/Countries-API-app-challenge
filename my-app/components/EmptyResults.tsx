import { useContext } from "react";
import { CountriesContext } from "../context/CountriesContext";

export default function EmptyResults() {
  const { regionValue } = useContext(CountriesContext);
  const [region, setRegion] = regionValue;

  return (
    <div className="py-5">
      <h1 className="font-semibold text-md">
        No results found{region && ` in ${region} region`}
      </h1>
      <h2 className="text-md">Try using another keyword{region && " or undo the Region Filter"}</h2>
    </div>
  );
}
