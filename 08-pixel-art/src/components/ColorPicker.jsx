import { useColorUpdate } from "./../hooks/useColorUpdate";

const ColorPicker = () => {
  const colors = ["red", "blue", "yellow", "green", "black", "white", "purple"];

  const colorUpdate = useColorUpdate();

  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map((color) => (
        <button key={color} style={{ backgroundColor: color }} onClick={() => colorUpdate(color)} />
      ))}
    </div>
  );
};

export default ColorPicker;
