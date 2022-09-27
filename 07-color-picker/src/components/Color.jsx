const Color = ({ hex, name, setBackgroundColor }) => {
  return (
    <button
      className="colorItem"
      style={{ backgroundColor: hex }}
      onClick={() => setBackgroundColor(hex)}
    >
      <h2>{name}</h2>
    </button>
  );
};

export default Color;
