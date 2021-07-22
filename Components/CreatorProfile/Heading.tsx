interface IProps {
  Heading: string;
}

const Heading: React.FC<IProps> = ({ Heading }) => {
  return (
    <div className="absolute -top-10 -left-10">
      <h2 className="font-black text-altBackground text-3xl md:text-6xl uppercase opacity-20">
        {Heading}
      </h2>
    </div>
  );
};

export default Heading;
