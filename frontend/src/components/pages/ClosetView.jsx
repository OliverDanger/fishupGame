import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import "../../styles/pages/ClosetView.scss";

import Paperdoll from "../clothes/Paperdoll";
import Dresser from "../clothes/Dresser";

const ClosetView = () => {
  const { userClothes } = useContext(UserContext);
  // wearing is the temporary state of clothes being tried on.
  // The db is only updated when wearing clothes are confirmed
  // Userclothes represents the actual saved outfit of the user
  const [wearing, setWearing] = useState({
    hat: null,
    faceUpper: null,
    faceLower: null,
    neck: null,
    bodyUpper: null,
    bodyLower: null,
    armsUpper: null,
    armsLower: null,
    handLeft: null,
    handRight: null,
    jacket: null,
    legsUpper: null,
    legsLower: null,
    socks: null,
    shoes: null,
  });

  useEffect(() => {
    if (userClothes.length > 0) {
      console.log('🦺', userClothes);
      setWearing({
        hat: userClothes.hat,
        faceUpper: userClothes.face_upper,
        faceLower: userClothes.face_lower,
        neck: userClothes.neck,
        bodyUpper: userClothes.body_upper,
        bodyLower: userClothes.body_lower,
        armsUpper: userClothes.arms_upper,
        armsLower: userClothes.arms_lower,
        handLeft: userClothes.hand_left,
        handRight: userClothes.hand_right,
        jacket: userClothes.jacket,
        legsUpper: userClothes.legs_upper,
        legsLower: userClothes.legs_lower,
        socks: userClothes.socks,
        shoes: userClothes.shoes,
      });
    }
  }, [userClothes]);

  useEffect(() => {
    console.log('🧣', wearing);
  }, [wearing]);

  return (
    <div className="closet-view">

      <div className="display">
        <Paperdoll></Paperdoll>
        <Dresser></Dresser>
      </div>
      <Link to={'/cabin'}>
        <button>Back</button>
      </Link>
    </div>
  );
};

export default ClosetView;