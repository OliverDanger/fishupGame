import Map from "../Map";
import "../../styles/pages/MapView.scss";
import { useState } from "react";

const MapView = function() {

  const [playerPosition, setPlayerPosition] = useState({x: 0, y: 0});

  return (
    <div className="map-view">
      <div className="player"></div>
      <Map playerPosition={playerPosition}/>
    </div>
  );
};

export default MapView;
