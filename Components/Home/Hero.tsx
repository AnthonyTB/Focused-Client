import Image from "next/image";

const HomeHero = () => {
  return (
    <header className="w-4/5 xl:w-3/5 h-screen m-auto flex flex-col justify-center relative">
      <div className="float-left">
        <Image
          src="/images/Logo-White-Yellow.svg"
          height="auto"
          width="150px"
          alt="Branding logo"
        />
      </div>
      <div className="bg-black w-full video z-10 relative -mt-16 lg:-mt-10" />
      <div className="float-right -mt-10 -ml-6">
        <Image
          src="/images/dot.svg"
          height={"100%"}
          width={"100%"}
          alt="dot pattern"
        />
      </div>
    </header>
  );
};

export default HomeHero;
