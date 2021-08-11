import Image from "next/image";
import { IncrementStats } from "../Home/CreatorStats";

interface IProps {
  ImageUrl: string;
  SocialMedias: ISocialMedia[];
  Name: string;
}

interface ISocialMedia {
  Provider: string;
  ProviderDesc: string;
  ProviderBranding: string;
  User: string;
}

const SocialMediaData: React.FC<ISocialMedia> = ({
  Provider,
  ProviderBranding,
  ProviderDesc,
  User,
}) => {
  return (
    <li className="mb-8 relative">
      <i
        className={`${ProviderBranding} text-black text-4xl md:text-6xl absolute top-0 -left-10 z-0`}
      />
      <p className="uppercase text-white text-xs font-black text-right relative z-10">
        {ProviderDesc}
      </p>
      <p className="text-white text-3xl md:text-6xl font-black relative z-10">
        <IncrementStats Value={20000} />
      </p>
    </li>
  );
};

const CreatorHero: React.FC<IProps> = ({ ImageUrl, SocialMedias, Name }) => {
  return (
    <header>
      <div className="w-1/5 opacity-5">
        <Image
          src={ImageUrl}
          layout="fill"
          objectFit="cover"
          alt="Headshot of creator"
          className="inline-block"
        />
      </div>
      <div className="flex flex-row absolute top-10 right-4 lg:right-10">
        <ul className="inline-block">
          {SocialMedias.map((SocialMedia: ISocialMedia) => (
            <SocialMediaData {...SocialMedia} />
          ))}
        </ul>
      </div>
      <div className="absolute top-10 left-4 lg:left-10 uppercase text-white text-4xl md:text-6xl font-black">
        <h1>{Name}</h1>
      </div>
    </header>
  );
};

export default CreatorHero;
