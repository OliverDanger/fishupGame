import React, { useState, useEffect } from "react";
import axios from "axios";
import { FixedSizeGrid as Grid } from "react-window";
import Ocean from "./tiles/Ocean";
import Sand from "./tiles/Sand";

import "../styles/Map.scss";



// Constants

const tileSize = 100;
const windowWidth = 600;
const windowHeight = 400;

// all tile component names must be added here
const tileComponents = {
  0: Ocean,
  1: Sand,
};

const Map = function() {

  const [mapData, setMapData] = useState([]);
  
  //get user's map data from the server
  useEffect(() => {
    axios.get("http://localhost:3001/api/tiles")
      .then(res => {
        setMapData(res.data);
      })
      .catch(error => {
        console.error("Error fetching map data:", error);
      });
  }, []);

  // Find the maximum x and y values to determine grid size
  const maxX = Math.max(...mapData.map(tile => tile.x)) + 1;
  const maxY = Math.max(...mapData.map(tile => tile.y)) + 1;

  // Create a 2D array to represent the grid
  const grid = Array.from({ length: maxY }, () => Array(maxX).fill(null));

  // Populate the grid with tile components
  mapData.forEach(tile => {
    const { x, y, type_number } = tile;
    grid[y][x] = tileComponents[type_number];
  });

  return (
    <div className="map">
      <Grid
        columnCount={maxX}
        rowCount={maxY}
        columnWidth={tileSize}
        rowHeight={tileSize}
        height={windowHeight}
        width={windowWidth}
      >
        {({ columnIndex, rowIndex, style }) => {
          const TileComponent = grid[rowIndex][columnIndex];
          return (
            <div
              className="mapTile"
              style={style}
              key={`${rowIndex}-${columnIndex}`}
            >
              {TileComponent && (
                <TileComponent x={columnIndex} y={rowIndex} />
              )}
            </div>
          );
        }}
      </Grid>
    </div>
  );
};

export default Map;