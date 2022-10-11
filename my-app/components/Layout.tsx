import { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";
import Nav from "./Nav";

export default function Layout({ children }: any) {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "bg-very-dark-blue-bg" : "bg-very-light-gray"}>
      <Nav />
      <main className="h-full md:px-20 px-4">{children}</main>
    </div>
  );
}
