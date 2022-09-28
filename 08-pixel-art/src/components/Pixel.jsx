import { useColor } from "../hooks/useColor";

const Pixel = () => {
  const color = useColor();

  const handleClick = (event) => {
    event.currentTarget.style.backgroundColor = color;
  };

  return (
    <div
      style={{ height: "30px", width: "30px", backgroundColor: "#B9B9B9", margin: "1px" }}
      onClick={(event) => handleClick(event)}
    />
  );
};

export default Pixel;
