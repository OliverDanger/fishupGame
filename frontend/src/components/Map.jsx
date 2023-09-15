import { useState, useEffect } from "react";
import axios from "axios";
import { FixedSizeGrid as Grid } from "react-window";
import Ocean from "./tiles/Ocean";
import Sand from "./tiles/Sand";

import "../styles/Map.scss";



// Constants

const tileSize = 100;

// all tile component names must be named aand numbered here
const tileComponents = {
  0: Ocean,
  1: Sand,
};

const Map = function({ windowDimensions }) {

  const [mapData, setMapData] = useState([]);
  const [targetTile, setTargetTile] = useState({ x: 12, y: 12 });
  // Set the initial scroll position based on the targetTile
  const initialScrollLeft = targetTile.x * tileSize;
  const initialScrollTop = targetTile.y * tileSize;
  const [scrollPosition, setScrollPosition] = useState({ scrollLeft: initialScrollLeft, scrollTop: initialScrollTop });

  //get user's map data from the server
  //temp location

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
        useIsScrolling={false}
        columnCount={maxX}
        rowCount={maxY}
        columnWidth={tileSize}
        rowHeight={tileSize}
        height={windowDimensions.height - 25}
        width={windowDimensions.width - 25}
        onItemsRendered={({ visibleColumnStartIndex, visibleRowStartIndex }) => {
          // Calculate the center tile coordinates
          const centerX = Math.floor(maxX / 2);
          const centerY = Math.floor(maxY / 2);


          // Calculate the new scroll position based on the targetTile coordinates
          const newScrollLeft = targetTile.x * tileSize;
          const newScrollTop = targetTile.y * tileSize;

          // Only update the scroll position if it has changed
          if (newScrollLeft !== scrollPosition.scrollLeft || newScrollTop !== scrollPosition.scrollTop) {
            setScrollPosition({ scrollLeft: newScrollLeft, scrollTop: newScrollTop });
          }
        }}
        // Set the initial scroll position
        scrollLeft={scrollPosition.scrollLeft}
        scrollTop={scrollPosition.scrollTop}
      >
        {({ columnIndex, rowIndex, style }) => {
          const TileComponent = grid[rowIndex][columnIndex];
          return (
            <div
              className="mapTile"
              style={style}
              key={`${rowIndex}-${columnIndex}`}
              onClick={() => {
                // Calculate new scroll position based on clicked tile's coordinates
                const newScrollLeft = columnIndex * tileSize;
                const newScrollTop = rowIndex * tileSize;

                // Set the new scroll position
                setScrollPosition({ scrollLeft: newScrollLeft, scrollTop: newScrollTop });
                console.log('✨', rowIndex, columnIndex);
                console.log('🐟', scrollPosition);
              }}
            >
              {TileComponent && (<TileComponent x={rowIndex} y={columnIndex} />)}
            </div>
          );
        }}
      </Grid >
    </div >
  );
};

export default Map;