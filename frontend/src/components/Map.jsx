import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FixedSizeGrid as Grid } from "react-window";
import { getTileComponent } from '../utils/TileList';
import { backendURL } from "../utils/_constants";
import { tileSize, mapWindowMargin } from "../utils/_constants";

import "../styles/Map.scss";


const Map = function({ windowDimensions }) {
  const [mapData, setMapData] = useState([]);
  const [focusedTile, setFocusedTile] = useState({ x: 0, y: 0 });
  const gridRef = useRef(null);


  // fetch map data
  useEffect(() => {
    axios.get(`${backendURL}/api/tiles`)
      .then(res => {
        setMapData(res.data);
      })
      .catch(error => {
        console.error("Error fetching map data:", error);
      });
  }, []);

  // set initial player position
  useEffect(() => {
    scrollGrid(focusedTile.x, focusedTile.y);
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

  // function to handle scrolling the map
  const scrollGrid = (x, y) => {
    console.log('🌈 Scrolling to:', x, y);
    console.log(windowDimensions, maxXCoordinate, maxYCoordinate);
    gridRef.current.scrollToItem({
      columnIndex: x,
      rowIndex: maxYCoordinate - y - 1,
      align: "center",
    });
  };

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
        className="map-grid"
        style={{ overflow: 'hidden' }}
        columnCount={maxXCoordinate}
        rowCount={maxYCoordinate}
        columnWidth={tileSize}
        rowHeight={tileSize}
        height={windowDimensions.height - mapWindowMargin}
        width={windowDimensions.width - mapWindowMargin}
        initialScrollLeft={focusedTile.x * tileSize}
        initialScrollTop={(maxYCoordinate - focusedTile.y - 1) * tileSize} // Reverse the initialScrollTop calculation
      >
        {({ columnIndex, rowIndex, style }) => {
          const TileComponent = grid[rowIndex][columnIndex];
          return (
            <div
              className={`mapTile ${focusedTile.x === columnIndex && maxYCoordinate - focusedTile.y - 1 === rowIndex ? 'focused' : ''}`}
              style={style}
              key={`${rowIndex}-${columnIndex}`}
            >
              {TileComponent && (<TileComponent x={columnIndex} y={maxYCoordinate - rowIndex - 1} />)}
            </div>
          );
        }}
      </Grid>
    </div>
  );
};

export default Map;
