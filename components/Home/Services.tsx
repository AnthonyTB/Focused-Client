interface IProps {
  Services: IService[];
}

interface IService {
  ServiceHeading: string;
  ServiceContent: string;
  ServiceLogo: string;
}

const Services: React.FC<IProps> = ({ Services }) => {
  const ServiceSection = ({
    ServiceHeading,
    ServiceContent,
    ServiceLogo,
  }: IService) => {
    return (
      <li key={ServiceHeading} className="relative">
        <div className="absolute flex items-center justify-center">
          <i
            className={`${ServiceLogo} rounded-full border-solid border-altBackground border-2 p-3 text-accent relative top-10`}
          />
        </div>
        <h4 className="font-bold text-accent text-2xl ml-16">
          {ServiceHeading}
        </h4>
        <dd className="mt-1 ml-16 text-base text-white">{ServiceContent}</dd>
      </li>
    );
  };

  return (
    <div className="inline-block lg:w-3/5">
      <ul className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        {Services.map((Service: IService) => ServiceSection(Service))}
      </ul>
    </div>
  );
};

export default Services;
