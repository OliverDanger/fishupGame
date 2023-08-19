import "../../styles/tiles/Ocean.scss";

const Ocean = function({ x, y }) {
  return (
    <div className="ocean">
      <p>Ocean at ({x}, {y})</p>
    </div>
  );
};

export default Ocean;