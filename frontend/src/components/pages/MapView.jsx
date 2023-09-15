import Map from "../Map";
import "../../styles/pages/MapView.scss";
import { useState, useEffect } from "react";

const MapView = function() {

  const [playerPosition, setPlayerPosition] = useState({row: 0, column: 0});
  const [targetPosition, setTargetPosition] = useState(playerPosition);

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
        <Map
          windowDimensions={ windowDimensions }
          playerPosition={playerPosition}
          setPlayerPosition={setPlayerPosition}
          targetPosition={targetPosition}
          setTargetPosition={setTargetPosition}
        />
      </div>
    </div>
  );
};

export default MapView;