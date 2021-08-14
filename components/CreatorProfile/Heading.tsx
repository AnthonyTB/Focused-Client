interface IProps {
  Heading: string;
}

const Heading: React.FC<IProps> = ({ Heading }) => {
  return (
    <div className="mb-4">
      <h2 className="font-black text-black text-3xl md:text-6xl uppercase opacity-40">
        {Heading}
      </h2>
    </div>
  );
};

export default Heading;
