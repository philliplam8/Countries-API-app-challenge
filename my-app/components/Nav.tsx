import { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";
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
        className={`py-8 md:px-20 flex justify-between items-center ${
          darkMode ? "text-white bg-dark-blue" : "text-very-dark-blue-lm"
        }`}
      >
        <Link href={"/"}>
          <p className="mx-5 font-extrabold text-sm">Where in the world?</p>
        </Link>
        <ul className="mx-5">
          <button
            onClick={darkModeHandler}
            className="w-full flex flex-row items-center align gap-2"
          >
            {darkMode ? <DarkModeIcon /> : <DarkModeOutlinedIcon />}
            <span className="font-bold text-sm">Dark Mode</span>
          </button>
        </ul>
      </nav>
  );
}
