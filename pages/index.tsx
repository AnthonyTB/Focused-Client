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
import Footer from "../components/Footer";

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

export default function Home({
  about,
  news,
  businesses,
  creators,
  footer,
  categories,
}: any) {
  const ourBusinesses = businesses.map((item: any) => {
    return {
      Brand: item.Image,
      URL: item.Link,
    };
  });

  const ourNews = news.map((item: any) => {
    return {
      ImgSrc: item.Articles.Image,
      Title: item.Articles.Title,
      Link: item.Articles.Link,
    };
  });

  const ourCreators = creators.map((item: any) => {
    return {
      ImageSrc: item.Image,
      ImageHeading: item.Name,
      ImageLink: `/creator/${item.Name}`,
    };
  });

  const footerSocials = footer.map((item: any) => {
    return {
      ProviderBranding: item.Links.Icon,
      Link: item.Links.Link,
    };
  });

  const ourCategories = categories.map((item: any) => {
    return {
      ServiceHeading: item.Heading,
      ServiceLogo: item.Icon,
      ServiceContent: item.Description,
    };
  });

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
        {about.BodyText ? (
          <section className="clear-both mb-24 overflow-hidden">
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
              <About Text={about.BodyText} />
            </ScrollAnimation>
          </section>
        ) : null}
        {ourNews.length ? (
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
                <Masonary items={ourNews} />
              </div>
            </ScrollAnimation>
          </section>
        ) : null}
        {ourCategories.length ? (
          <section className="clear-both mb-32">
            <Heading Text={"OUR SERVICES"} />
            <Services Services={ourCategories} />
          </section>
        ) : null}
        {ourCreators.length ? (
          <section className="clear-both mb-10 overflow-x-hidden">
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
                <div className="clear-both lg:clear-none lg:mb-36">
                  <ImageSlide Slides={ourCreators} />
                </div>
              </ScrollAnimation>
            </div>
          </section>
        ) : null}
        {ourBusinesses.length ? (
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
              <Work Companies={ourBusinesses} />
            </ScrollAnimation>
          </section>
        ) : null}
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
            <ContactForm />
          </ScrollAnimation>
        </section>
      </main>
      <Footer SocialMedias={footerSocials} />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://focused-gg.herokuapp.com/businesses`);
  const res2 = await fetch(`https://focused-gg.herokuapp.com/about-us`);
  const res3 = await fetch(`https://focused-gg.herokuapp.com/news-articles`);
  const res4 = await fetch(`https://focused-gg.herokuapp.com/creators`);
  const res5 = await fetch(`https://focused-gg.herokuapp.com/footer-socials`);
  const res6 = await fetch(`https://focused-gg.herokuapp.com/categories`);
  const businesses = await res.json();
  const about = await res2.json();
  const news = await res3.json();
  const creators = await res4.json();
  const footer = await res5.json();
  const categories = await res6.json();

  if (!businesses || !about || !news || !creators || !footer || !categories) {
    return {
      notFound: true,
    };
  }

  return {
    props: { businesses, about, news, creators, footer, categories },
  };
}
