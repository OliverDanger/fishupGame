import "../../styles/tiles/NullTile.scss";

const NullTile = function({ x, y }) {
  return (
    <div className="nulltile">
      <p>Ocean at ({x}, {y})</p>
    </div>
  );
};

export default NullTile;