import { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";
import Skeleton from "@mui/material/Skeleton";

export default function SkeletionRow(props: { width: string }) {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <Skeleton
      animation="wave"
      variant="rounded"
      className={`my-1 ${darkMode ? "bg-dark-blue" : ""}`}
      width={props.width}
    />
  );
}
