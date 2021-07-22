const About = ({ Text }: { Text: string }) => {
  return (
    <>
      <p className="text-left text-white lg:w-3/5 inline-block">{Text}</p>
    </>
  );
};

export default About;
