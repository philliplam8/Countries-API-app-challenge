import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import Link from "next/link";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function Nav() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  const darkModeHandler = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav
      className={`sticky top-0 z-10 w-full py-8 lg:px-20 flex justify-between items-center shadow-md ${
        darkMode ? "bg-dark-blue" : "bg-white"
      }`}
    >
      <Link href={"/"}>
        <p className="mx-5 lg:mx-0 font-extrabold text-md md:text-lg lg:text-2xl cursor-pointer">
          Where in the world?
        </p>
      </Link>

      <button
        onClick={darkModeHandler}
        className="mx-5 lg:mx-0 flex flex-row items-center gap-2 cursor-pointer"
      >
        {darkMode ? (
          <DarkModeIcon aria-hidden="true" />
        ) : (
          <DarkModeOutlinedIcon aria-hidden="true" />
        )}
        <span className="font-bold text-sm">Dark Mode</span>
      </button>
    </nav>
  );
}
