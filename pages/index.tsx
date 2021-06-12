import Head from "next/head";
import Heading from "../Components/Home/Heading";
import HomeHero from "../Components/Home/Hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Focused</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeHero />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Heading Text={"ABOUT US"} />
      </main>
    </div>
  );
}
