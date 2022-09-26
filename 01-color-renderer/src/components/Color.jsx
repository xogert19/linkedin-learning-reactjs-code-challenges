const Color = ({ hex, name }) => {
  return (
    <div className="colorItem" style={{ backgroundColor: hex }}>
      <h2>{name}</h2>
    </div>
  );
};

export default Color;
