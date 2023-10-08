import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FixedSizeGrid as Grid } from "react-window";
import { getTileComponent } from '../utils/TileList';
import { tileSize, mapWindowMargin } from "../utils/_constants";

import "../styles/Map.scss";


const Map = function({ windowDimensions }) {
  const [mapData, setMapData] = useState({
    tiles: [], // Initialize with an empty array
    width: 0,
    height: 0,
    maxX: 0,
    maxY: 0,
    minX: 0,
    minY: 0,
  });
  const [focusedTile, setFocusedTile] = useState({ x: 10, y: 10 });
  const gridRef = useRef(null);


  // fetch map data
  useEffect(() => {
    axios.get("http://localhost:3001/api/tiles")
      .then(res => {
        let largestXRange = null;
        let largestYRange = null;
        let maxX = null;
        let maxY = null;
        let minX = null;
        let minY = null;
        const xValues = res.data.map(tile => tile.x);
        const yValues = res.data.map(tile => tile.y);

        // calculate X value range
        if (xValues.length === 0) {
          console.log('💢 Error: no map here!');
        } else {
          maxX = Math.max(...xValues);
          minX = Math.min(...xValues);
          largestXRange = maxX - minX;
        }

        // calculate Y value range
        if (yValues.length === 0) {
          console.log('💢 Error: no map here!');
        } else {
          maxY = Math.max(...yValues);
          minY = Math.min(...yValues);
          largestYRange = maxY - minY;
        }



        setMapData({ tiles: res.data, width: largestXRange, height: largestYRange, maxX, maxY, minX, minY });
        console.log('👀', mapData);
      })
      .catch(error => {
        console.error("Error fetching map data:", error);
      });
  }, []);

  // set initial player position
  useEffect(() => {
    scrollGrid(focusedTile.x, focusedTile.y);
    console.log('🎄', mapData.width, mapData.height);
  }, []);

  // Create 2d matrix of arrays to match
  const grid = Array.from({ length: mapData.height }, () => Array(mapData.width).fill(null));

  // map the map data into the grid
  mapData.tiles.forEach(tile => {
    const { x, y, type_number } = tile;
    grid[y][x] = getTileComponent(type_number);
  });

  // function to handle scrolling the map
  const scrollGrid = (x, y) => {
    console.log('🌈 Scrolling to:', x, y);
    gridRef.current.scrollToItem({
      columnIndex: x,
      rowIndex: mapData.height - y - 1,
      align: "center",
    });
  };

  console.log('😇', mapData);

  // function to handle the key presses
  const handleArrowKey = (event) => {
    let newX = focusedTile.x;
    let newY = focusedTile.y;

    switch (event.key) {
      case "ArrowLeft":
        newX--;
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
      {mapData.tiles.length > 0 ? (
        <Grid
          ref={gridRef}
          className="map-grid"
          style={{ overflow: 'hidden' }}
          columnCount={mapData.height}
          rowCount={mapData.width}
          columnWidth={tileSize}
          rowHeight={tileSize}
          height={windowDimensions.height - mapWindowMargin}
          width={windowDimensions.width - mapWindowMargin}
          initialScrollLeft={focusedTile.x * tileSize}
          initialScrollTop={(mapData.height - focusedTile.y - 1) * tileSize} // Reverse the initialScrollTop calculation
        >
          {({ columnIndex, rowIndex, style }) => {
            const TileComponent = grid[rowIndex][columnIndex];
            return (
              <div
                className={`mapTile ${focusedTile.x === columnIndex && mapData.height - focusedTile.y - 1 === rowIndex ? 'focused' : ''}`}
                style={style}
                key={`${rowIndex}-${columnIndex}`}
              >
                {TileComponent && (<TileComponent x={columnIndex} y={mapData.height - rowIndex - 1} />)}
              </div>
            );
          }}
        </Grid>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Map;
