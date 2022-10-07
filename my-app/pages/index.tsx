import type { NextPage } from "next";
import Head from "next/head";
import Card from "../components/Card";
import { HiOutlineSearch } from "react-icons/Hi";

const Home: NextPage = () => {

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
        <div className="h-[60px] w-[350px] px-7 flex gap-2 align-items items-center bg-white shadow-md rounded-lg">
          <HiOutlineSearch className="text-gray-400" />
          <input
            type="text"
            id="search"
            name="search"
            placeholder={`Search for a country...`}
            className={"focus:outline-none focus:border-blue-500 bg-inherit"}
          />
        </div>

        <div className="py-5 flex flex-row flex-wrap justify-center align-items gap-10">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
