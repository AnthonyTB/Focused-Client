import Head from "next/head";
import Heading from "../Components/Home/Heading";
import HomeHero from "../Components/Home/Hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Focused | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeHero />
      <main className="w-full px-20">
        <section className="clear-both">
          <Heading Text={"ABOUT US"} />
          <div className="flex flex-col items-center justify-center min-h-screen"></div>
        </section>
        <section className="clear-both">
          <Heading Text={"OUR SERVICES"} />
          <div className="flex flex-col items-center justify-center min-h-screen"></div>
        </section>
        <section className="clear-both">
          <Heading Text={"OUR CLIENTS"} />
          <div className="flex flex-col items-center justify-center min-h-screen"></div>
        </section>
        <section className="clear-both">
          <Heading Text={"CONTACT US"} />
          <div className="flex flex-col items-center justify-center min-h-screen"></div>
        </section>
      </main>
    </div>
  );
}
