import { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";
import { HiOutlineSearch } from "react-icons/Hi";

export default function Input() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  return (
    <div className="h-[60px] w-[350px] px-7 flex gap-2 align-items items-center bg-white shadow-md rounded-lg">
      <HiOutlineSearch className="text-gray-400" />
      <input
        type="text"
        id="search"
        name="search"
        placeholder={`Search for a country...`}
        className={"w-full focus:outline-none focus:border-blue-500 bg-inherit"}
      />
    </div>
  );
}
