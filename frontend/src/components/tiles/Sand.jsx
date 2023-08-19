import "../../styles/tiles/Sand.scss";

const Sand = function({ x, y }) {
  return (
    <div className="sand">
      <p>Sand at ({x}, {y})</p>
    </div>
  );
}

export default Sand;