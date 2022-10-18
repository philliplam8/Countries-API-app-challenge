import { useContext } from "react";
import { useRouter } from "next/router";
import { DarkModeContext } from "../context/DarkModeContext";
import WrongLocationIcon from "@mui/icons-material/WrongLocation";

export default function Custom404() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const route = useRouter();
  const handleHomeButton = () => {
    route.push(`/`);
  };

  return (
    <div className="min-h-screen flex flex-col gap-10 justify-center text-center items-center">
      <div className="flex flex-col gap-5 items-center">
        <WrongLocationIcon fontSize="large"/>
        <div>
          <h1 className="text-2xl font-semibold">
            Oops! Where in the world did we go...
          </h1>
          <div>
            <h2 className="text-sm font-light">
              Sorry we couldn't find what you were looking for.
            </h2>
          </div>
        </div>
      </div>
      <button
        className={`h-[60px] w-full sm:w-[200px] shadow-lg rounded-lg ${
          darkMode ? "bg-dark-blue" : "bg-white"
        }`}
        onClick={handleHomeButton}
      >
        Let's Go Home
      </button>
    </div>
  );
}
