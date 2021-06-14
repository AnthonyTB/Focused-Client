const Heading = ({ Text }: { Text: string }) => {
  const formatText = (val: string): JSX.Element => {
    const words = val.split(" ");
    let result = "";
    words.forEach((word: string, idx: number) => {
      if (idx === 0) {
        result =
          result +
          `<span style="color: #1a1a1a; -webkit-text-stroke: 1px #d4af37;">${word}</span>`;
      } else {
        result = result + ` ${word}`;
      }
    });

    return (
      <h2
        className=" text-accent font-black text-6xl text-right uppercase border-accent border-dotted border-r-4 pr-8 Heading"
        dangerouslySetInnerHTML={{ __html: result }}
      ></h2>
    );
  };

  return <div className="w-1/5 inline-block">{formatText(Text)}</div>;
};

export default Heading;
