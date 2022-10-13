import { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";
import Nav from "./Nav";

export default function Layout({ children }: any) {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  return (
    <div
      className={`h-screen ${
        darkMode
          ? "text-white bg-very-dark-blue-bg"
          : "text-very-dark-blue-lm bg-very-light-gray"
      }`}
    >
      <Nav />
      <main className={`lg:px-20 px-4`}>{children}</main>
    </div>
  );
}
