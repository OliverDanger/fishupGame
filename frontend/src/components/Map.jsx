import { useState, useEffect } from "react";
import axios from "axios";
import { FixedSizeGrid as Grid } from "react-window";
import {getTileComponent} from '../utils/TileList.jsx';

import "../styles/Map.scss";

const tileSize = 100;

const Map = function ({ windowDimensions }) {
  const [mapData, setMapData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/tiles")
      .then(res => {
        setMapData(res.data);
      })
      .catch(error => {
        console.error("Error fetching map data:", error);
      });
  }, []);

  const maxXCoordinate = Math.max(...mapData.map(tile => tile.x)) + 1;
  const maxYCoordinate = Math.max(...mapData.map(tile => tile.y)) + 1;

  const grid = Array.from({ length: maxYCoordinate }, () => Array(maxXCoordinate).fill(null));

  mapData.forEach(tile => {
    const { x, y, type_number } = tile;
    grid[y][x] = getTileComponent(type_number);
  });

  return (
    <div className="map">
      <Grid
        columnCount={maxXCoordinate}
        rowCount={maxYCoordinate}
        columnWidth={tileSize}
        rowHeight={tileSize}
        height={windowDimensions.height - 25}
        width={windowDimensions.width - 25}
      >
        {({ columnIndex, rowIndex, style }) => {
          const TileComponent = grid[rowIndex][columnIndex];
          return (
            <div
              className="mapTile"
              style={style}
              key={`${rowIndex}-${columnIndex}`}
              onClick={() => {
                // Your click handling code can go here
                console.log('Tile clicked at:', rowIndex, columnIndex);
              }}
            >
              {TileComponent && (<TileComponent x={rowIndex} y={columnIndex} />)}
            </div>
          );
        }}
      </Grid>
    </div>
  );
};

export default Map;
