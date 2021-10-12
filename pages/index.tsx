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

export default function Home({ about, news, businesses, creators, footer }: any) {

  const ourBusinesses = businesses.map((item: any) => {
    return {
      Brand: `${process.env.NEXT_PUBLIC_CMS}${item.business[0].Image[0].url}`,
      URL: item.business[0].Link,
    }
  })

  const ourNews = news.map((item: any) => {
    return {
      ImgSrc:
      `${process.env.NEXT_PUBLIC_CMS}${item.Article[0].Image.url}`,
      Title: item.Article[0].Title,
      Link: item.Article[0].Link,
    }
  })

  const ourCreators = creators.map((item: any) => {
    return {
      ImageSrc:
      `${process.env.NEXT_PUBLIC_CMS}${item.Creator[0].Image.url}`,
      ImageHeading: item.Creator[0].Name,
      ImageLink: `/creator/${item.Creator[0].Name}`,
    }
  })

  const footerSocials = footer.map((item: any) => {
    return {
      ProviderBranding: item.FooterSocials[0].FontAwesomeIcon,
      Link: item.FooterSocials[0].Link,
    }
  })

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
              Text={ about.BodyText }
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
              <Masonary items={ourNews} />
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
                <ImageSlide Slides={ourCreators} />
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
            <Work Companies={ourBusinesses} />
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
            <ContactForm />
          </ScrollAnimation>
        </section>
      </main>
      <Footer SocialMedias={footerSocials} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://focused-gg.herokuapp.com/businesses`)
  const res2 = await fetch(`https://focused-gg.herokuapp.com/about-us`)
  const res3 = await fetch(`https://focused-gg.herokuapp.com/news-articles`)
  const res4 = await fetch(`https://focused-gg.herokuapp.com/creators`)
  const res5 = await fetch(`https://focused-gg.herokuapp.com/footer-socials`)
  const businesses = await res.json()
  const about = await res2.json()
  const news = await res3.json()
  const creators = await res4.json()
  const footer = await res5.json()

  if (!businesses || !about || !news || !creators || !footer ) {
    return {
      notFound: true,
    }
  }

  return {
    props: { businesses, about, news, creators, footer }, // will be passed to the page component as props
  }
}