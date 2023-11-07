import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { useContext } from "react";
import { UserContext } from "../../hooks/context/UserContext";

import "../../styles/pages/ClosetView.scss";

import Paperdoll from "../clothes/Paperdoll";
import Dresser from "../clothes/Dresser";

const ClosetView = () => {
  const { userInfo, userClothes, clothesDetails } = useContext(UserContext);
  // wearing is the temporary state of clothes being tried on.
  // The db is only updated when wearing clothes are confirmed
  // Userclothes represents the actual saved outfit of the user
  const [wearing, setWearing] = useState([]);



  useEffect(() => {
    if (userInfo?.clothes?.length > 0) {
      console.log('🦺', userInfo);
      setWearing(userInfo.clothes);
    }
  }, [userInfo]);

  console.log('🍀', wearing);

  return (
    <div className="closet-view">

      <div className="display">
        <Paperdoll wearing={wearing} />
        <Dresser userClothes={userClothes} clothesDetails={clothesDetails} />
      </div>
      <Link to={'/cabin'}>
        <button>Back</button>
      </Link>
    </div>
  );
};

export default ClosetView;