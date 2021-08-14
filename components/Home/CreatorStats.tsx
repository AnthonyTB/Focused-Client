import { useState } from "react";

interface IIncrementProps {
  Value: number;
}

const IncrementStats: React.FC<IIncrementProps> = ({ Value }) => {
  const [renderedVal, setRenderedVal] = useState<number>(Value);

  const insert = (arr: any, index: number, newItem: any) => [
    ...arr.slice(0, index),
    newItem,
    ...arr.slice(index),
  ];

  const formatCount = (val: number) => {
    if (val.toString().length === 5) {
      let arr = val.toString().split("");
      return arr.slice(0, 2).join("") + "K";
    } else if (val.toString().length === 6) {
      let arr = val.toString().split("");
      return arr.slice(0, 3).join("") + "K";
    } else if (val.toString().length === 7) {
      let arr = val.toString().split("");
      return insert(arr, 1, ".").slice(0, 3).join("") + "M";
    } else if (val.toString().length === 8) {
      let arr = val.toString().split("");
      return arr.slice(0, 2).join("") + "M";
    } else if (val.toString().length === 9) {
      let arr = val.toString().split("");
      return arr.slice(0, 3).join("") + "M";
    } else if (val.toString().length <= 4) {
      return val.toString().replace(/(.)(?=(\d{3})+$)/g, "$1,");
    }
  };

  return <>{formatCount(renderedVal)}</>;
};

interface ICSProps {}

const CreatorStats: React.FC<ICSProps> = () => {
  return (
    <ul className="mb-4">
      <li className="inline-block mx-2">
        <i className="fab fa-instagram text-accent inline-block text-xl mr-2" />
        <p className="font-black text-2xl inline-block text-white">
          <IncrementStats Value={100000} />
        </p>
        <p className="font-black text-accent text-xs text-center">FOLLOWERS</p>
      </li>
      <li className="inline-block mx-2">
        <i className="fab fa-twitter text-accent inline-block text-xl mr-2" />
        <p className="font-black text-2xl inline-block text-white">
          <IncrementStats Value={100000} />
        </p>
        <p className="font-black text-accent text-xs text-center">FOLLOWERS</p>
      </li>
      <li className="inline-block mx-2">
        <i className="fab fa-twitch text-accent inline-block text-xl mr-2" />
        <p className="font-black text-2xl inline-block text-white">
          <IncrementStats Value={100000} />
        </p>
        <p className="font-bold text-accent text-xs text-center">FOLLOWERS</p>
      </li>
    </ul>
  );
};

export { CreatorStats, IncrementStats };
