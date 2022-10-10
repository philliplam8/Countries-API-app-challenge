import { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";

// TODO use https://tailwindui.com/components/application-ui/elements/dropdowns

export default function Dropdown() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  return (
    <div
      className={`h-[60px] w-[200px] px-7 flex align-items shadow-md rounded-lg cursor-pointer
        ${
          darkMode
            ? "text-white bg-dark-blue"
            : "text-very-dark-blue-lm bg-white"
        }`}
    >
      <select
        name="filter"
        id="filter-region"
        className={`w-full cursor-pointer
        ${darkMode ? "bg-dark-blue" : "bg-white"}`}
      >
        <option value="">Filter by Region</option>
        <option value="">Africa</option>
        <option value="">America</option>
        <option value="">Asia</option>
        <option value="">Europe</option>
        <option value="">Oceania</option>
      </select>
    </div>
  );
}
