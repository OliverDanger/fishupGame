import Map from "../Map";
import "../../styles/pages/MapView.scss";
import { useState, useEffect } from "react";

const MapView = function() {

  const [playerPosition, setPlayerPosition] = useState({x: 0, y: 0});

  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });


  return (
    <div className="map-view">
      <div className="map-container">
        <div className="player"></div>
        <Map windowDimensions={ windowDimensions } playerPosition={playerPosition}/>
      </div>
    </div>
  );
};

export default MapView;
