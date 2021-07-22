const Heading = ({ Text }: { Text: string }) => {
  const formatText = (val: string): JSX.Element => {
    const words = val.split(" ");
    let result = "";
    words.forEach((word: string, idx: number) => {
      if (idx === 0) {
        result =
          result +
          `<span style="color: #1a1a1a; -webkit-text-stroke: 1px #000;">${word}</span>`;
      } else {
        result = result + ` ${word}`;
      }
    });

    return (
      <h2
        className="text-accent font-black text-4xl xlg:text-5xl text-right uppercase border-accent border-dotted border-b-4 lg:border-b-0 lg:border-r-4 pb-2 lg:pb-0 lg:pr-4 mb-10 lg:mb-0 Heading"
        dangerouslySetInnerHTML={{ __html: result }}
      ></h2>
    );
  };

  return <div className="lg:w-1/5 float-left mr-10">{formatText(Text)}</div>;
};

export default Heading;
