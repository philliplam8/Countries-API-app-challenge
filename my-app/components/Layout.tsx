import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }: any) {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <div
      className={`min-h-screen flex flex-col justify-between ${
        darkMode
          ? "text-white bg-very-dark-blue-bg"
          : "text-very-dark-blue-lm bg-very-light-gray"
      }`}
    >
      <div>
        <Nav />
        <main className={`lg:px-20 px-4`}>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
