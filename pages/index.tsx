import Head from "next/head";
import Heading from "../components/Home/Heading";
import HomeHero from "../components/Home/Hero";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import ImageSlide from "../components/ImageSlide";
import { CreatorStats } from "../components/Home/CreatorStats";
import ContactForm from "../components/Home/Contact";
import ScrollAnimation from "react-animate-on-scroll";
import Work from "../components/Home/Work";
import Masonary from "../components/Masonary";

// const mockServices = [
//   {
//     ServiceHeading: "Management",
//     ServiceLogo: "fas fa-users",
//     ServiceContent:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   },
//   {
//     ServiceHeading: "Management",
//     ServiceLogo: "fas fa-users",
//     ServiceContent:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   },
//   {
//     ServiceHeading: "Management",
//     ServiceLogo: "fas fa-users",
//     ServiceContent:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   },
//   {
//     ServiceHeading: "Management",
//     ServiceLogo: "fas fa-users",
//     ServiceContent:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   },
// ];

const mockSlides = [
  {
    ImageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Shroud_at_PUBG_PGI_2018_%28cropped%29.jpg",
    ImageHeading: "Shroud",
    ImageLink: "/creator/Shroud",
  },
  {
    ImageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Shroud_at_PUBG_PGI_2018_%28cropped%29.jpg",
    ImageHeading: "Shroud1",
    ImageLink: "/creator/Shroud1",
  },
  {
    ImageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Shroud_at_PUBG_PGI_2018_%28cropped%29.jpg",
    ImageHeading: "Shroud2",
    ImageLink: "/creator/Shroud2",
  },
  {
    ImageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Shroud_at_PUBG_PGI_2018_%28cropped%29.jpg",
    ImageHeading: "Shroud3",
    ImageLink: "/creator/Shroud3",
  },
  {
    ImageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Shroud_at_PUBG_PGI_2018_%28cropped%29.jpg",
    ImageHeading: "Shroud4",
    ImageLink: "/creator/Shroud4",
  },
  {
    ImageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Shroud_at_PUBG_PGI_2018_%28cropped%29.jpg",
    ImageHeading: "Shroud5",
    ImageLink: "/creator/Shroud5",
  },
  {
    ImageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Shroud_at_PUBG_PGI_2018_%28cropped%29.jpg",
    ImageHeading: "Shroud6",
    ImageLink: "/creator/Shroud6",
  },
  {
    ImageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Shroud_at_PUBG_PGI_2018_%28cropped%29.jpg",
    ImageHeading: "Shroud7",
    ImageLink: "/creator/Shroud7",
  },
  {
    ImageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Shroud_at_PUBG_PGI_2018_%28cropped%29.jpg",
    ImageHeading: "Shroud8",
    ImageLink: "/creator/Shroud8",
  },
  {
    ImageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Shroud_at_PUBG_PGI_2018_%28cropped%29.jpg",
    ImageHeading: "Shroud9",
    ImageLink: "/creator/Shroud9",
  },
  {
    ImageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Shroud_at_PUBG_PGI_2018_%28cropped%29.jpg",
    ImageHeading: "Shroud10",
    ImageLink: "/creator/Shroud10",
  },
  {
    ImageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Shroud_at_PUBG_PGI_2018_%28cropped%29.jpg",
    ImageHeading: "Shroud7",
    ImageLink: "/creator/Shroud7",
  },
];

const mockCompanies = [
  {
    Brand: "https://i.imgur.com/Ya8eXAI.png",
    URL: "https://gfuel.com/",
    Name: "GFUEL",
  },
  {
    Brand: "https://i.imgur.com/zO9y6Nd.png",
    URL: "https://www.bgca.org/",
    Name: "Boys&Girls",
  },
  {
    Brand: "https://i.imgur.com/Ebhxjw5.png",
    URL: "https://www.dell.com/en-us/gaming/alienware",
    Name: "Dell",
  },
  {
    Brand: "https://i.imgur.com/ee92bLN.png",
    URL: "https://battlebeavercustoms.com/",
    Name: "BattleBeaver",
  },
  {
    Brand: "https://i.imgur.com/TtDoNwU.png",
    URL: "https://dreamhack.com/",
    Name: "Dreamhack",
  },
  {
    Brand: "https://i.imgur.com/fsIuJdt.png",
    URL: "https://www.elgato.com/en",
    Name: "Elgato",
  },
  {
    Brand: "https://i.imgur.com/EgPZCEc.png",
    URL: "https://www.hyperxgaming.com/unitedstates/us",
    Name: "HyperX",
  },
  {
    Brand: "https://i.imgur.com/feQNo6G.png",
    URL: "https://liquiddeath.com/",
    Name: "LiquidDeath",
  },
  {
    Brand: "https://i.imgur.com/DuN2BWf.png",
    URL: "https://www.manscaped.com/",
    Name: "Manscaped",
  },
  {
    Brand: "https://i.imgur.com/pI6haV9.png",
    URL: "https://www.twitch.tv/",
    Name: "Twitch",
  },
  {
    Brand: "https://i.imgur.com/qytatOO.png",
    URL: "https://www.pitviper.com/",
    Name: "PitViper",
  },
  {
    Brand: "https://i.imgur.com/rrm7Qrx.png",
    URL: "https://respawnproducts.com/",
    Name: "RespawnProducts",
  },
];

const mockContactForm = {
  Email: "sdfsdfsdf@gmail.com",
  Address: "Seattle, WA",
  SocialMedias: [
    {
      Brand: "twitter",
      Link: "https://twitter.com",
      BrandingIcon: "fab fa-twitter",
    },
    {
      Brand: "instagram",
      Link: "https://instagram.com",
      BrandingIcon: "fab fa-instagram",
    },
    {
      Brand: "linkedin",
      Link: "https://linkedin.com",
      BrandingIcon: "fab fa-linkedin-in",
    },
  ],
};

const mockNews = [
  {
    ImgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Shroud_at_PUBG_PGI_2018_%28cropped%29.jpg",
    Title: "News 1",
    Link: "https://google.com",
  },
  {
    ImgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Shroud_at_PUBG_PGI_2018_%28cropped%29.jpg",
    Title: "News 2",
    Link: "https://google.com",
  },
  {
    ImgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Shroud_at_PUBG_PGI_2018_%28cropped%29.jpg",
    Title: "News 3",
    Link: "https://google.com",
  },
  {
    ImgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Shroud_at_PUBG_PGI_2018_%28cropped%29.jpg",
    Title: "News 4",
    Link: "https://google.com",
  },
  {
    ImgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Shroud_at_PUBG_PGI_2018_%28cropped%29.jpg",
    Title: "News 5",
    Link: "https://google.com",
  },
  {
    ImgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Shroud_at_PUBG_PGI_2018_%28cropped%29.jpg",
    Title: "News 6",
    Link: "https://google.com",
  },
  {
    ImgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Shroud_at_PUBG_PGI_2018_%28cropped%29.jpg",
    Title: "News 7",
    Link: "https://google.com",
  },
  {
    ImgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Shroud_at_PUBG_PGI_2018_%28cropped%29.jpg",
    Title: "News 8",
    Link: "https://google.com",
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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        ></link>
      </Head>
      <ScrollAnimation
        animateOnce={true}
        animateIn="fadeIn"
        duration={3}
        className="w-full"
      >
        <HomeHero />
      </ScrollAnimation>
      <main className="w-full px-5 md:px-10 lg:px-7">
        <section className="clear-both mb-24 overflow-x-hidden">
          <ScrollAnimation
            animateOnce={true}
            animateIn="slideInLeft"
            duration={1}
            className="w-full"
          >
            <Heading Text={"ABOUT US"} />
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={true}
            animateIn="fadeIn"
            duration={3}
            className="w-full"
          >
            <About
              Text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
          </ScrollAnimation>
        </section>
        <section className="clear-both mb-32 overflow-hidden">
          <ScrollAnimation
            animateOnce={true}
            animateIn="slideInLeft"
            duration={1}
            className="w-full"
          >
            <Heading Text={"RECENT NEWS"} />
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={true}
            animateIn="fadeIn"
            duration={3}
            className="w-full"
          >
            <div className="lg:max-w-full clear-both lg:clear-none lg:mb-12">
              <Masonary items={mockNews} />
            </div>
          </ScrollAnimation>
        </section>
        {/* <section className="clear-both mb-24">
          <Heading Text={"OUR SERVICES"} />
          <Services Services={mockServices} />
        </section> */}
        <section className="clear-both mb-32 overflow-x-hidden">
          <ScrollAnimation
            animateOnce={true}
            animateIn="slideInLeft"
            duration={1}
            className="w-full"
          >
            <Heading Text={"THE CREATORS"} />
          </ScrollAnimation>
          <div className="lg:w-5/6 lg:ml-20">
            <ScrollAnimation
              animateOnce={true}
              animateIn="slideInRight"
              duration={1}
              className="w-full"
            >
              <div className="float-right">
                <CreatorStats />
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce={true}
              animateIn="fadeIn"
              duration={3}
              className="w-full"
            >
              <div className="lg:max-w-80 clear-both lg:float-right lg:mb-36">
                <ImageSlide Slides={mockSlides} />
              </div>
            </ScrollAnimation>
          </div>
        </section>
        <section className="clear-both mb-32 overflow-x-hidden">
          <ScrollAnimation
            animateOnce={true}
            animateIn="slideInLeft"
            duration={3}
            className="w-full"
          >
            <Heading Text={"OUR WORK"} />
          </ScrollAnimation>
          <ScrollAnimation animateOnce={true} animateIn="fadeIn" duration={3}>
            <Work Companies={mockCompanies} />
          </ScrollAnimation>
        </section>
        <section className="clear-both mb-32 overflow-x-hidden">
          <ScrollAnimation
            animateOnce={true}
            animateIn="slideInLeft"
            duration={3}
            className="w-full"
          >
            <Heading Text={"CONTACT US"} />
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={true}
            animateIn="fadeIn"
            duration={3}
            className="w-full"
          >
            <ContactForm {...mockContactForm} />
          </ScrollAnimation>
        </section>
      </main>
    </div>
  );
}
