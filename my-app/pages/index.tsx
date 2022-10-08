import { useContext, useState, useEffect } from "react";
import { CountriesContext } from "../CountriesContext";
import type { NextPage } from "next";
import Head from "next/head";
import CardGroup from "../components/CardGroup";
import Card from "../components/Card";
import Input from "../components/Input";
import Dropdown from "../components/Dropdown";


// TODO Typescript
const parseCountries = (data: any) => {
  let parsedCountries: {
    key: String;
    flagImage: String;
    countryName: String;
    population: Number;
    region: String;
    capital: String;
  }[] = [];

  for (let i = 0; i < data.length; i++) {
    const country = data[i];

    parsedCountries[i] = {
      key: country.name.common,
      flagImage: country.flags.png,
      countryName: country.name.common,
      population: country.population,
      region: country.region,
      capital: country.capital,
    };
  }

  return parsedCountries;
};

const Home: NextPage = () => {
  const [countries, setCountries] = useContext(CountriesContext);

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        let parsedCountries = parseCountries(data);
        console.log(parsedCountries);
        setCountries(parsedCountries);
        setData(data);
        setLoading(false);
        // console.log(data);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

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

        <div className="py-5 flex flex-row flex-wrap justify-center align-items gap-10">

          {/* <CardGroup /> */}
          {countries.map(
            (country: {
              key: String;
              flagImage: String;
              countryName: String;
              population: Number;
              region: String;
              capital: String;
            }) => {
              return (
                <Card
                  key={country.key}
                  flagImage={country.flagImage}
                  countryName={country.countryName}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
