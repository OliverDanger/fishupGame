import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { useContext } from "react";
import { UserContext } from "../../hooks/context/UserContext";

import "../../styles/pages/ClosetView.scss";

import Paperdoll from "../clothes/Paperdoll";
import Dresser from "../clothes/Dresser";

const userID = 1;

const ClosetView = () => {
  const { userData, getUserByID, getUserClothes, getUserWardrobe } = useContext(UserContext);

  // wearing is a temporary state for trying on clothes in the closet.
  // When a clothing choice is confirmed userData is updated using wearing.
  const [ wearing, setWearing ] = useState([]);

  useEffect(() => {
    if (!userData.user) {
      console.log('🦺', userData);
      getUserByID(userID);
      getUserClothes(userID);
      getUserWardrobe(userID);
    } else {
      console.log('🧣', userData);
    }
  }, []);

  useEffect(() => {
    if (userData.clothes) {
      setWearing(userData.clothes);
      console.log('QQQQQ', wearing);
    }
  }, [userData]);

  // console.log('🍀', userData);

  return (
    <div className="closet-view">

      <div className="display">
        <Paperdoll userData={userData} wearing={wearing} />
        <Dresser userData={userData}/>
      </div>
      <Link to={'/cabin'}>
        <button>Back</button>
      </Link>
    </div>
  );
};

export default ClosetView;