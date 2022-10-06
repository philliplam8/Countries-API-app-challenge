import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { DarkModeProvider } from "../DarkModeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DarkModeProvider>
  );
}

export default MyApp;
