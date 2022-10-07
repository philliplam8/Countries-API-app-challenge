import type { NextPage } from "next";
import Head from "next/head";
import Card from "../components/Card";
import Input from "../components/Input";

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
        <Input />
        
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
