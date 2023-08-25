import Map from "../Map";
import "../../styles/pages/MapView.scss";

const MapView = function() {
  return (
    <div className="map-view">
      <div className="map-container">
        <div className="player"></div>
        <div className="map-content">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default MapView;
