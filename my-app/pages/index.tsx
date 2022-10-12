import { useContext, useState, useEffect } from "react";
import { CountriesContext } from "../CountriesContext";
import type { NextPage } from "next";
import Head from "next/head";
import Input from "../components/Input";
import Dropdown from "../components/Dropdown";
import CardGroup from "../components/CardGroup";

const ALL_COUNTRIES_API = "https://restcountries.com/v3.1/all";

// TODO Typescript
/**
 *
 * @param data
 * @returns
 */
const parseCountries = (data: [any]) => {
  let parsedCountries = [];

  for (let i = 0; i < data.length; i++) {
    const country = data[i];
    parsedCountries[i] = {
      key: country.name.common,
      flagImage: country.flags.svg,
      countryName: country.name.common,
      population: country.population.toLocaleString(),
      region: country.region,
      capital: country.capital,
    };
  }

  console.log({ parseCountries });
  return parsedCountries;
};

const Home: NextPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [countries, setCountries] = useContext(CountriesContext);

  useEffect(() => {
    setLoading(true);

    fetch(ALL_COUNTRIES_API)
      .then((res) => res.json())
      .then((data) => {
        let parsedCountries = parseCountries(data);
        // console.log(parsedCountries);
        setCountries(parsedCountries);
        setLoading(false);
      });
  }, []);

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
