import Head from "next/head";
import Heading from "../Components/Home/Heading";
import HomeHero from "../Components/Home/Hero";
import About from "../Components/Home/About";
import Services from "../Components/Home/Services";

const mockServices = [
  {
    ServiceHeading: "Management",
    ServiceLogo: "fas fa-users",
    ServiceContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    ServiceHeading: "Management",
    ServiceLogo: "fas fa-users",
    ServiceContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    ServiceHeading: "Management",
    ServiceLogo: "fas fa-users",
    ServiceContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    ServiceHeading: "Management",
    ServiceLogo: "fas fa-users",
    ServiceContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Focused | Home</title>
        <script
          src="https://kit.fontawesome.com/1a7135390e.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <HomeHero />
      <main className="w-full px-20">
        <section className="clear-both h-96">
          <Heading Text={"ABOUT US"} />
          <About
            Text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
          />
        </section>
        <section className="clear-both h-96">
          <Heading Text={"OUR SERVICES"} />
          <Services Services={mockServices} />
        </section>
        <section className="clear-both h-96">
          <Heading Text={"OUR CLIENTS"} />
        </section>
        <section className="clear-both h-96">
          <Heading Text={"CONTACT US"} />
        </section>
      </main>
    </div>
  );
}
