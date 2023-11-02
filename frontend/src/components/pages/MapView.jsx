import Map from "../Map";
import "../../styles/pages/MapView.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MapView = function() {

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
  }, []);


  return (
    <div className="map-view">
      <div className="map-container">
        <div className="player"></div>
        <Map
          windowDimensions={windowDimensions}
        />
      </div>
      <div className="boat-nav">
        <Link to={'/cabin'}>
          <button>Cabin</button>
        </Link>
        <Link to={'/below'}>
          <button>Below Deck</button>
        </Link>
      </div>
    </div>
  );
};

export default MapView;