/* eslint-disable camelcase */
import "../../styles/clothes/Dresser.scss";

import ClosedDresserDrawer from "./ClosedDresserDrawer";
import OpenDresserDrawer from "./OpenDresserDrawer";
import { clothingTypes } from "../../utils/_constants";
import { useState } from "react";

const Dresser = ({ userData, wearing, setWearing }) => {
  const [ dresserState, setDresserState] = useState('drawers');

  const closeDrawer = () => {
    setDresserState('drawers');
  };

  const openDrawer = (clothingType) => {
    setDresserState(clothingType);
  };

  return (
    <div className="dresser-container">
      {/* ALL DRAWERS VIEW */}
      {dresserState === 'drawers' && clothingTypes && clothingTypes.map((clothingType, index) => (
        <ClosedDresserDrawer
          key={index}
          clothingType={clothingType}
          openDrawer={openDrawer}
        />
      ))}

      {/* OPEN DRAWER VIEW */}
      {dresserState !== 'drawers' &&
        <OpenDresserDrawer
          clothingType={dresserState}
          closeDrawer={closeDrawer}
          userData={userData}
          wearing={wearing}
          setWearing={setWearing}
        />
      }
      {}
    </div>
  );
};



export default Dresser;