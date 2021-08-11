import Image from "next/image";

interface IProps {
  Companies: ICompany[];
}

interface ICompany {
  Brand: string;
  Name: string;
  URL: string;
}

const Work: React.FC<IProps> = ({ Companies }) => {
  return (
    <>
      <h1 className="text-4xl  text-accent font-black uppercase text-center mb-4">
        Companies we've worked with
      </h1>
      <ul className="flex flex-row flex-wrap Companies sm:ml-16 lg:ml-0 justify-center">
        {Companies.map(({ Brand, Name, URL }: ICompany) => (
          <li key={Name} className="m-auto mx-4 w-2/5 sm:w-1/4 lg:w-2/12">
            <a href={URL}>
              <Image
                width="auto"
                height="auto"
                src={Brand}
                alt={Name}
                objectFit="contain"
              />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Work;
