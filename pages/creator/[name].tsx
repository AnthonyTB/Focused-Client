import Head from "next/head";
import Hero from "../../components/CreatorProfile/Hero";
import About from "../../components/CreatorProfile/About";
import Heading from "../../components/CreatorProfile/Heading";
import Contact from "../../components/CreatorProfile/Contact";
import ImageSlide from "../../components/ImageSlide";
import Post from "../../components/CreatorProfile/Post";
import ScrollAnimation from "react-animate-on-scroll";

const CreatorProfile: React.FC = ({ creator }: any) => {
  const ourPartnerships = creator.Creator[0].Partnership.map((item: any) => {
    return {
      ImageSrc: item.Image,
      ImageLink: item.Link,
    };
  });

  const mockSponsorSlides = [
    {
      ImageSrc:
        "https://resource.logitechg.com/w_719,c_limit,q_auto:best,f_auto,b_rgb:f4f4f4,dpr_auto/content/dam/gaming/en/products/shroud/shroud-lp-quote-2.png?v=1",
      ImageLink: "",
    },
    {
      ImageSrc:
        "https://resource.logitechg.com/w_719,c_limit,q_auto:best,f_auto,b_rgb:f4f4f4,dpr_auto/content/dam/gaming/en/products/shroud/shroud-lp-quote-2.png?v=1",
      ImageLink: "",
    },
    {
      ImageSrc:
        "https://resource.logitechg.com/w_719,c_limit,q_auto:best,f_auto,b_rgb:f4f4f4,dpr_auto/content/dam/gaming/en/products/shroud/shroud-lp-quote-2.png?v=1",
      ImageLink: "",
    },
    {
      ImageSrc:
        "https://resource.logitechg.com/w_719,c_limit,q_auto:best,f_auto,b_rgb:f4f4f4,dpr_auto/content/dam/gaming/en/products/shroud/shroud-lp-quote-2.png?v=1",
      ImageLink: "",
    },
    {
      ImageSrc:
        "https://resource.logitechg.com/w_719,c_limit,q_auto:best,f_auto,b_rgb:f4f4f4,dpr_auto/content/dam/gaming/en/products/shroud/shroud-lp-quote-2.png?v=1",
      ImageLink: "",
    },
    {
      ImageSrc:
        "https://resource.logitechg.com/w_719,c_limit,q_auto:best,f_auto,b_rgb:f4f4f4,dpr_auto/content/dam/gaming/en/products/shroud/shroud-lp-quote-2.png?v=1",
      ImageLink: "",
    },
  ];

  const mockPosts = [{ type: "twitter", user: creator.Creator[0].Twitter }];

  const mockSocialMedia = [
    {
      Provider: "Twitter",
      ProviderDesc: "Followers",
      ProviderBranding: "fab fa-twitter",
      User: "shroud",
      Link: "https://twitter.com/shroud",
    },
    {
      Provider: "Twitch",
      ProviderDesc: "Followers",
      ProviderBranding: "fab fa-twitch",
      User: "shroud",
      Link: "https://twitch.com/shroud",
    },
    {
      Provider: "Instagram",
      ProviderDesc: "Followers",
      ProviderBranding: "fab fa-instagram",
      User: "shroud",
      Link: "https://instagram.com/shroud",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Focused | {creator.Creator[0].Name}</title>
        <script
          src="https://kit.fontawesome.com/1a7135390e.js"
          crossOrigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        ></link>
      </Head>
      <main className="w-3/4 m-auto">
        <div className="w-1/4 m-auto min-h-screen overflow-x-hidden">
          <Hero
            Name={creator.Creator[0].Name}
            ImageUrl={creator.Creator[0].Image}
            SocialMedias={mockSocialMedia}
          />
        </div>
        <section className="md:w-3/4 mt-20 mb-48 m-auto">
          <ScrollAnimation
            animateOnce={true}
            animateIn="fadeIn"
            duration={3}
            className="w-full"
          >
            <About Content={creator.Creator[0].About} />
          </ScrollAnimation>
        </section>
        <section className="md:w-3/4 mb-48 m-auto relative">
          <ScrollAnimation
            animateOnce={true}
            animateIn="fadeIn"
            duration={3}
            className="w-full"
          >
            <Heading Heading={"Partnerships"} />
            <div className="min-w-full">
              <ImageSlide Slides={ourPartnerships} />
            </div>
          </ScrollAnimation>
        </section>
        {creator.Creator[0].Twitter && (
          <section className="md:w-3/4 mb-48 m-auto relative">
            <ScrollAnimation
              animateOnce={true}
              animateIn="fadeIn"
              duration={3}
              className="w-full"
            >
              <Heading Heading={"Recent Posts"} />
              <div className="flex flex-col md:flex-row">
                {mockPosts.map(({ type, user }: any) => (
                  <Post postType={type} postUser={user} />
                ))}
              </div>
            </ScrollAnimation>
          </section>
        )}
        <section className="md:w-3/4 m-auto relative">
          <ScrollAnimation
            animateOnce={true}
            animateIn="fadeIn"
            duration={3}
            className="w-full"
          >
            <Heading Heading={"Get In Touch"} />
            <Contact
              CreatorName={creator.Creator[0].Name}
              CreatorEmail={creator.Creator[0].Email}
            />
          </ScrollAnimation>
        </section>
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://focused-gg.herokuapp.com/creators");
  const users = await res.json();

  const paths = users.map((user: any) => ({
    params: { name: user.Creator[0].Name },
  }));

  return { paths, fallback: false };
}

export async function getServerSideProps({ params }: any) {
  const res = await fetch(`https://focused-gg.herokuapp.com/creators`);
  const creators = await res.json();

  let creator;

  for (const i of creators) {
    if (i.Creator[0].Name === params.name) {
      creator = i;
      break;
    }
  }

  if (!creator) {
    return {
      notFound: true,
    };
  }

  return {
    props: { creator },
  };
}

export default CreatorProfile;
