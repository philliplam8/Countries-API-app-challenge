import type { NextPage } from "next";
import { useContext, useEffect } from "react";
import { CountriesContext } from "../context/CountriesContext";
import { parseCountries } from "../services/countries.service";
import Head from "next/head";
import Input from "../components/Input";
import { TailwindDropdown } from "../components/RegionDropdown";
import CardGroup from "../components/CardGroup";
import EmptyResults from "../components/EmptyResults";

const ALL_COUNTRIES_API = "https://restcountries.com/v3.1/all";

const Home: NextPage = () => {
  const { countriesValue, keywordValue, loadingValue } =
    useContext(CountriesContext);
  const [countries, setCountries] = countriesValue;
  const [keyword, setKeyword] = keywordValue;
  const [isLoading, setLoading] = loadingValue;

  useEffect(() => {
    if (keyword === "") {
      setLoading(true);
      fetch(ALL_COUNTRIES_API)
        .then((res) => res.json())
        .then((data) => {
          let parsedCountries = parseCountries(data);
          setCountries(parsedCountries);
          setLoading(false);
        });
    }
  }, [keyword]);

  if (!countries) return <p>No profile data</p>;

  return (
    <div>
      <Head>
        <title>Frontend Mentor Challenge - Country APIs</title>
        <meta
          name="description"
          content="Frontend Mentor Challenge - REST Countries API"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="py-6">
        <div className="flex flex-col sm:flex-row gap-5 justify-between">
          <Input />
          <TailwindDropdown />
        </div>

        <CardGroup />
        {keyword !== "" && countries.length === 0 && <EmptyResults />}
      </div>
    </div>
  );
};

export default Home;
