/* eslint-disable camelcase */
import "../../styles/clothes/Dresser.scss";

import ClosedDresserDrawer from "./ClosedDresserDrawer";
import OpenDresserDrawer from "./OpenDresserDrawer";
import { clothingTypes } from "../../utils/_constants";
import { useState } from "react";

const sampleData = [
  {
    id: 1,
    name: "White T-shirt",
    description: "A cozy and clean white t-shirt",
    colour: "cloud",
    fancy: 1,
    cool: 1,
    eccentric: -1,
    camouflage: -1,
    set: null,
    img: "basicTshirt",
    category: "shirt",
    number_held: 1
  },
  {
    id: 2,
    name: "Black T-shirt",
    description: "A cozy and clean black t-shirt",
    colour: "space",
    fancy: 0,
    cool: 1,
    eccentric: -1,
    camouflage: 1,
    set: null,
    img: "basicTshirt",
    category: "shirt",
    number_held: 2
  },
  {
    id: 3,
    name: "Orange Shorts",
    description: "Those are some orange shorts!",
    colour: "orange",
    fancy: 0,
    cool: 1,
    eccentric: -1,
    camouflage: 1,
    set: null,
    img: "basicShorts",
    category: "shorts",
    number_held: 50
  }
];



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