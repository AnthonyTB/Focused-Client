import { useRouter } from "next/router";
import Head from "next/head";
import Hero from "../../components/CreatorProfile/Hero";
import About from "../../components/CreatorProfile/About";
import Heading from "../../components/CreatorProfile/Heading";
import Contact from "../../components/CreatorProfile/Contact";
import ImageSlide from "../../components/ImageSlide";
import Navigation from "../../components/Navigation";
import Post from "../../components/CreatorProfile/Post";
import InfoModal from "../../components/Modal";
import ReactDOM from 'react-dom';

const CreatorProfile: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;
  const modalNode = <div id='#modal'></div>;

  const mockSponsorSlides = [
    {
      ImageSrc:
        "https://resource.logitechg.com/w_719,c_limit,q_auto:best,f_auto,b_rgb:f4f4f4,dpr_auto/content/dam/gaming/en/products/shroud/shroud-lp-quote-2.png?v=1",
      ImageCallback: () => ReactDOM.createPortal(<InfoModal Heading={'Hi'} Content={'Hi'} isOpen={true} />, modalNode as any),
    },
    {
      ImageSrc:
        "https://resource.logitechg.com/w_719,c_limit,q_auto:best,f_auto,b_rgb:f4f4f4,dpr_auto/content/dam/gaming/en/products/shroud/shroud-lp-quote-2.png?v=1",
      ImageCallback: () => ReactDOM.createPortal(<InfoModal Heading={'Hi 2'} Content={'Hi'} isOpen={true} />, modalNode as any),
    },
    {
      ImageSrc:
        "https://resource.logitechg.com/w_719,c_limit,q_auto:best,f_auto,b_rgb:f4f4f4,dpr_auto/content/dam/gaming/en/products/shroud/shroud-lp-quote-2.png?v=1",
      ImageCallback: () => ReactDOM.createPortal(<InfoModal Heading={'Hi 3'} Content={'Hi'} isOpen={true} />, modalNode as any),
    },
    {
      ImageSrc:
        "https://resource.logitechg.com/w_719,c_limit,q_auto:best,f_auto,b_rgb:f4f4f4,dpr_auto/content/dam/gaming/en/products/shroud/shroud-lp-quote-2.png?v=1",
      ImageCallback: () => ReactDOM.createPortal(<InfoModal Heading={'Hi 4'} Content={'Hi'} isOpen={true} />, modalNode as any),
    },
    {
      ImageSrc:
        "https://resource.logitechg.com/w_719,c_limit,q_auto:best,f_auto,b_rgb:f4f4f4,dpr_auto/content/dam/gaming/en/products/shroud/shroud-lp-quote-2.png?v=1",
      ImageCallback: () => ReactDOM.createPortal(<InfoModal Heading={'Hi 5'} Content={'Hi'} isOpen={true} />, modalNode as any),
    },
    {
      ImageSrc:
        "https://resource.logitechg.com/w_719,c_limit,q_auto:best,f_auto,b_rgb:f4f4f4,dpr_auto/content/dam/gaming/en/products/shroud/shroud-lp-quote-2.png?v=1",
      ImageCallback: () => ReactDOM.createPortal(<InfoModal Heading={'Hi 6'} Content={'Hi'} isOpen={true} />, <div id="#modal" /> as any),
    },
  ];

  const mockPosts = [
    { type: "twitter", user: "anthony_bostic" },
  ];

  const mockSocialMedia = [
    {
      Provider: "Twitter",
      ProviderDesc: "Followers",
      ProviderBranding: "fab fa-twitter",
      User: "shroud",
    },
    {
      Provider: "Twitch",
      ProviderDesc: "Followers",
      ProviderBranding: "fab fa-twitch",
      User: "shroud",
    },
    {
      Provider: "Instagram",
      ProviderDesc: "Followers",
      ProviderBranding: "fab fa-instagram",
      User: "shroud",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Focused | {name}</title>
        <script
          src="https://kit.fontawesome.com/1a7135390e.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Navigation />
      <main className="w-3/4 m-auto">
        {modalNode}
        <div className="w-1/4 m-auto min-h-screen">
          <Hero
            Name={name as string}
            ImageUrl={
              "https://upload.wikimedia.org/wikipedia/commons/5/51/Shroud_at_PUBG_PGI_2018_%28cropped%29.jpg"
            }
            SocialMedias={mockSocialMedia}
          />
        </div>
        <section className="md:w-3/4 mt-20 mb-48 m-auto">
          <About
            Content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
          />
        </section>
        <section className="md:w-3/4 mb-48 m-auto relative">
          <Heading Heading={"Partnerships"} />
          <div className="min-w-full">
            <ImageSlide Slides={mockSponsorSlides} />
          </div>
        </section>
        <section className="md:w-3/4 mb-48 m-auto relative">
          <Heading Heading={"Recent Posts"} />
          <div className="flex flex-col md:flex-row">
            {mockPosts.map(({ type, user }: any) => (
              <Post postType={type} postUser={user} />
            ))}
          </div>
        </section>
        <section className="md:w-3/4 m-auto relative">
          <Heading Heading={"Get Into Contact"} />
          <Contact
            CreatorName={name as string}
            CreatorEmail={"shroud@gmail.com"}
          />
        </section>
      </main>
    </div>
  );
};

export default CreatorProfile;