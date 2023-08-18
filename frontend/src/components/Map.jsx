import Ocean from "./tiles/Ocean";
import Sand from "./tiles/Sand";

const mapJSON =
  [
    {
      id: 9,
      x: 0,
      y: 0,
      type_number: 0,
      created_at: "2023-07-19T20:27:36.725Z",
      updated_at: "2023-07-19T20:27:36.725Z"
    },
    {
      id: 10,
      x: 1,
      y: 0,
      type_number: 0,
      created_at: "2023-07-19T20:27:36.732Z",
      updated_at: "2023-07-19T20:27:36.732Z"
    },
    {
      id: 11,
      x: 0,
      y: 1,
      type_number: 0,
      created_at: "2023-07-19T20:27:36.737Z",
      updated_at: "2023-07-19T20:27:36.737Z"
    },
    {
      id: 12,
      x: 1,
      y: 1,
      type_number: 1,
      created_at: "2023-07-19T20:27:36.744Z",
      updated_at: "2023-07-19T20:27:36.744Z"
    }
  ];

// all tile component names must be added here
const tileComponents = {
  0: Ocean,
  1: Sand,
};

function Map() {
  // Find the maximum x and y values to determine grid size
  const maxX = Math.max(...mapJSON.map(tile => tile.x)) + 1;
  const maxY = Math.max(...mapJSON.map(tile => tile.y)) + 1;

  // Create a 2D array to represent the grid
  const grid = Array.from({ length: maxY }, () => Array(maxX).fill(null));

  // Populate the grid with tile components
  mapJSON.forEach(tile => {
    const { x, y, type_number } = tile;
    grid[y][x] = tileComponents[type_number];
  });

  return (
    <div className="Map">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="MapRow">
          {row.map((TileComponent, columnIndex) => (
            <div key={columnIndex} className="MapTile">
              {TileComponent && <TileComponent />}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Map;