import Color from "./Color";

const colors = [
  {
    hex: "#91A6FF",
    name: "Cornflower Blue",
  },
  {
    hex: "#FF88DC",
    name: "Persian Pink",
  },
  {
    hex: "#80FF72",
    name: "Screamin Green",
  },
  {
    hex: "#FF5154",
    name: "Tart Orange",
  },
];

const ColorRenderer = () => {
  return (
    <div className="colorContainer">
      {colors.map((color, index) => {
        return <Color key={index} name={color.name} hex={color.hex} />;
      })}
    </div>
  );
};

export default ColorRenderer;
