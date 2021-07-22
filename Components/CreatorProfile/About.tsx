interface IProps {
  Content: string;
}

const About: React.FC<IProps> = ({ Content }) => (
  <p className="text-center font-bold text-white">{Content}</p>
);

export default About;
