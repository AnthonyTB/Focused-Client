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
      <li key={ServiceHeading}>
        <i className={ServiceLogo} />
        <h4>{ServiceHeading}</h4>
        <p>{ServiceContent}</p>
      </li>
    );
  };

  return (
    <div>
      <ul>{Services.map((Service: IService) => ServiceSection(Service))}</ul>
    </div>
  );
};

export default Services;
