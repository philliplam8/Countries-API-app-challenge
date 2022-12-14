import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { DarkModeProvider } from "../context/DarkModeContext";
import { CountriesProvider } from "../context/CountriesContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <CountriesProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CountriesProvider>
    </DarkModeProvider>
  );
}

export default MyApp;
