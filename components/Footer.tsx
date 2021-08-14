import { ISocialMedia } from "./CreatorProfile/Hero";
import Head from "next/head";

interface IProps {
  SocialMedias: ISocialMedia[];
}

const Footer: React.FC<IProps> = ({ SocialMedias }) => {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/1a7135390e.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <footer>
        <ul className="flex flex-row justify-center border-accent border-dotted border-t-4 w-3/4 md:w-1/3 m-auto">
          {SocialMedias.map(({ ProviderBranding, Link }) => (
            <li className="m-8">
              <a href={Link} target="blank_">
                <i
                  className={`${ProviderBranding} text-altBackground ease-in-out transition-all duration-500 hover:text-white text-3xl`}
                />
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </>
  );
};

export default Footer;
