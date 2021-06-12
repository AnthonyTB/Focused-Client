const Heading = ({ Text }: { Text: string }) => {
  const formatText = (Text: string): any => {
    const words = Text.split(" ");
    let result = "";
    words.forEach((word: string, idx: number) => {
      if (idx === 0) {
        result =
          result +
          `<span style="color: #1a1a1a; -webkit-text-stroke: 1px #d4af37;">${word}<br /></span>`;
      } else {
        result = result + `<span>${word}<br /></span>`;
      }
    });

    return (
      <h2
        className="font-roboto text-accent font-black text-6xl text-right uppercase border-accent border-dotted border-r-4 pr-8 float-left"
        dangerouslySetInnerHTML={{ __html: result }}
      ></h2>
    );
  };

  return <div>{formatText(Text)}</div>;
};

export default Heading;
