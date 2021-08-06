import Image from "next/image";

const HomeHero = () => {
  return (
    <header className="w-4/5 xl:w-3/5 h-screen m-auto flex flex-col justify-center relative">
      <div className="float-left w-1/2 sm:mb-4 md:mb-0 md:w-full">
        <Image
          src="/images/Logo-White.svg"
          height="auto"
          width="auto"
          alt="Branding logo"
        />
      </div>
      <div className="bg-black w-full video z-10 relative -mt-16 lg:-mt-10" />
      <div className="float-right -mt-14 -ml-6 w-1/3 md:w-full md:-ml-24 md:-mt-14">
        <Image
          src="/images/dot.svg"
          height={"auto"}
          width={"auto"}
          alt="dot pattern"
        />
      </div>
    </header>
  );
};

export default HomeHero;
