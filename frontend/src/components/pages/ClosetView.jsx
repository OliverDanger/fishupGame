import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import "../../styles/pages/ClosetView.scss";

import Paperdoll from "../clothes/Paperdoll";
import Dresser from "../clothes/Dresser";

const ClosetView = () => {
  const { userInfo } = useContext(UserContext);
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
    if (userInfo.length > 0) {
      console.log('🦺', userInfo);
      setWearing({
        hat: userInfo.hat,
        faceUpper: userInfo.face_upper,
        faceLower: userInfo.face_lower,
        neck: userInfo.neck,
        bodyUpper: userInfo.body_upper,
        bodyLower: userInfo.body_lower,
        armsUpper: userInfo.arms_upper,
        armsLower: userInfo.arms_lower,
        handLeft: userInfo.hand_left,
        handRight: userInfo.hand_right,
        jacket: userInfo.jacket,
        legsUpper: userInfo.legs_upper,
        legsLower: userInfo.legs_lower,
        socks: userInfo.socks,
        shoes: userInfo.shoes,
      });
    }
  }, [userInfo]);

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