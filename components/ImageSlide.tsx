import ImageComponent from "next/image";
import Link from "next/link";

interface IImageProps {
  ImageSrc: string;
  ImageLink?: string;
  ImageHeading?: string;
  ImageCallback?: () => void;
}

const Image: React.FC<IImageProps> = ({
  ImageSrc,
  ImageLink,
  ImageHeading,
  ImageCallback,
}): JSX.Element => {
  const renderHeading = () => {
    if (ImageHeading) {
      return (
        <p className="absolute bottom-4 right-0 text-xl uppercase font-black text-white px-2 py-1 custom__heading">
          {ImageHeading}
        </p>
      );
    }
  };

  const ifLinkorCallback = () => {
    if (ImageLink) {
      return (
        <Link href={ImageLink} key={ImageHeading}>
          <a className="inline-block mx-2 relative mb-4 custom__image-card">
            <ImageComponent src={ImageSrc} width={200} height={300} />
            {renderHeading()}
          </a>
        </Link>
      );
    } else if (ImageCallback) {
      return (
        <button
          onClick={ImageCallback}
          className="inline-block mx-2 relative mb-4 custom__image-card"
        >
          <ImageComponent src={ImageSrc} width={200} height={300} />
          {renderHeading()}
        </button>
      );
    } else {
      return <h3>error</h3>;
    }
  };

  return ifLinkorCallback();
};

interface IImageSlideProps {
  Slides: IImageProps[];
}

const ImageSlide: React.FC<IImageSlideProps> = ({ Slides }) => {
  return (
    <>
      <div className="whitespace-nowrap overflow-x-scroll overflow-y-hidden">
        {Slides.map((Slide: IImageProps) => (
          <Image {...Slide} />
        ))}
      </div>
    </>
  );
};

export default ImageSlide;
