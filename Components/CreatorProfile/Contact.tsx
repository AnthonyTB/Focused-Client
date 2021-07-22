interface IProps {
  CreatorName: string;
  CreatorEmail: string;
}

const Contact: React.FC<IProps> = ({ CreatorName, CreatorEmail }) => {
  return (
    <div className="xl:w-5/6 mb-36">
      <p className="xl:w-3/4 mb-4 text-white font-bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <a
        href={`mailto:${CreatorEmail}`}
        className="float-right uppercase text-white rounded border-2 border-accent py-1 px-2 font-black"
      >
        MESSAGE {CreatorName}
      </a>
    </div>
  );
};

export default Contact;
