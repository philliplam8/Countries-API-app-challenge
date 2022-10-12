import type { NextPage } from "next";
import { useContext, useState, useEffect } from "react";
import { CountriesContext } from "../CountriesContext";
import { parseCountries } from "../services/countries.service";
import Head from "next/head";
import Input from "../components/Input";
import Dropdown from "../components/RegionDropdown";
import CardGroup from "../components/CardGroup";

const ALL_COUNTRIES_API = "https://restcountries.com/v3.1/all";

const Home: NextPage = () => {
  const [isLoading, setLoading] = useState(false);
  const { countriesValue, keywordValue } = useContext(CountriesContext);
  const [countries, setCountries] = countriesValue;
  const [keyword, setKeyword] = keywordValue;

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

  if (isLoading) return <p>Loading...</p>;
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
        <div className="flex flex-wrap gap-5 justify-between">
          <Input />
          <Dropdown />
        </div>

        <CardGroup />
      </div>
    </div>
  );
};

export default Home;
