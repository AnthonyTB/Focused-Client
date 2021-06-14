import Image from "next/image";

const HomeHero = () => {
  return (
    <header className="w-1/2 h-screen relative">
      <h1 className="text-white font-black text-6xl mt-10 mb-2">
        FOCUSED<span className="text-accent">.</span>
      </h1>
      <div className="bg-black w-7/8 h-4/6 z-10 relative" />
      <div className="absolute bottom-32 -right-20">
        <Image
          src="/images/dot.svg"
          height={200}
          width={200}
          alt="dot pattern"
        />
      </div>
    </header>
  );
};

export default HomeHero;
