import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import NotListedLocationIcon from "@mui/icons-material/NotListedLocation";
export default function EmptyFlag() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  return (
    <div
      className={`w-full h-full p-2 flex items-center rounded-lg shadow-lg ${
        darkMode ? "bg-dark-blue" : "bg-white"
      }`}
    >
      <NotListedLocationIcon fontSize="large" />
      <h1 className="text-md">No Flag Image Found</h1>
    </div>
  );
}
