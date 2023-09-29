import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FixedSizeGrid as Grid } from "react-window";
import { getTileComponent } from '../utils/TileList';
import { tileSize, mapWindowMargin } from "../utils/_constants";

import "../styles/Map.scss";


const Map = function({ windowDimensions }) {
  const [mapData, setMapData] = useState([]);
  const [focusedTile, setFocusedTile] = useState({ x: 10, y: 10 });
  const gridRef = useRef(null);
  const scrollGrid = (x, y) => {
    gridRef.current.scrollToItem({
      columnIndex: x,
      rowIndex: y,
      align: "center",
    });
  };

  useEffect(() => {
    axios.get("http://localhost:3001/api/tiles")
      .then(res => {
        setMapData(res.data);
      })
      .catch(error => {
        console.error("Error fetching map data:", error);
      });
  }, []);

  // calculate the max dimensions of the current map, and create 2d matrix of arrays to match
  const maxXCoordinate = Math.max(...mapData.map(tile => tile.x)) + 1;
  const maxYCoordinate = Math.max(...mapData.map(tile => tile.y)) + 1;
  const grid = Array.from({ length: maxYCoordinate }, () => Array(maxXCoordinate).fill(null));

  // map the map data into the grid
  mapData.forEach(tile => {
    const { x, y, type_number } = tile;
    grid[y][x] = getTileComponent(type_number);
  });

  // function to handle the key presses
  const handleArrowKey = (event) => {
    let newX = focusedTile.x;
    let newY = focusedTile.y;

    switch (event.key) {
      case "ArrowLeft":
        newX--;
        console.log('left!');
        break;
      case "ArrowRight":
        newX++;
        break;
      case "ArrowUp":
        newY++;
        break;
      case "ArrowDown":
        newY--;
        break;
      default:
        return;
    }

    setFocusedTile({ x: newX, y: newY });
    console.log('✨', focusedTile);
    console.log(event);

    // Scroll to the new focused tile
    scrollGrid(newX, newY);
  };

  useEffect(() => {
    // Add event listener for key presses
    window.addEventListener("keydown", handleArrowKey);

    return () => {
      // remove the event listener when the component unmounts
      window.removeEventListener("keydown", handleArrowKey);
    };
  }, [focusedTile]);

  return (
    <div className="map">
      <Grid
        ref={gridRef}
        columnCount={maxXCoordinate}
        rowCount={maxYCoordinate}
        columnWidth={tileSize}
        rowHeight={tileSize}
        height={windowDimensions.height - mapWindowMargin}
        width={windowDimensions.width - mapWindowMargin}
        initialScrollLeft={focusedTile.x * tileSize}
        initialScrollTop={focusedTile.y * tileSize}
      >
        {({ columnIndex, rowIndex, style }) => {
          const TileComponent = grid[rowIndex][columnIndex];
          return (
            <div
              className={`mapTile ${focusedTile.x === columnIndex && focusedTile.y === rowIndex ? 'focused' : ''}`}
              style={style}
              key={`${rowIndex}-${columnIndex}`}
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
