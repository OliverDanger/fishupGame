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

const tileTypes = {
  1: 'Ocean',
  2: 'Sand',
};

function Map() {
  return (
    <div className="Map">
      <h1> this is the map!</h1>
    </div>
  );
}

export default Map;