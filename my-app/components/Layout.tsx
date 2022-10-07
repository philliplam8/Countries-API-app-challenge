import { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";
import Nav from "./Nav";

export default function Layout({ children }: any) {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  return (
    <div>
      <Nav />
      <main
        className={`px-4 ${
          darkMode ? "bg-very-dark-blue-bg" : "bg-very-light-gray"
        }`}
      >
        {children}
      </main>
    </div>
  );
}
