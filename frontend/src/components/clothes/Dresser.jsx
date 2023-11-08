import "../../styles/clothes/Dresser.scss";

import DresserDrawer from "./DresserDrawer";
import { clothingTypes } from "../../utils/_constants";

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



const Dresser = ({ userData }) => {
  return (
    <div className="dresser-container">
      {clothingTypes && clothingTypes.map((type, index) => (
        <DresserDrawer key={index} clothingType={type} />
      ))}
    </div>
  );
};



export default Dresser;