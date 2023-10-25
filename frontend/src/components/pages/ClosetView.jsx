import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


import "../../styles/pages/ClosetView.scss";

const ClosetView = () => {
  const [userClothes, setUserClothes] = useState([]);
  const userID = 1;

  // fetch clothes owned by user matching the userID constant
  useEffect(() => {
    axios.get(`http://localhost:3001/api/users/${userID}/owned_clothing`)
      .then(res => {
        setUserClothes(res.data);
        console.log('🌈',userClothes);
      })
      .catch(error => {
        console.error("Error fetching user's clothes", error);
      });
  }, []);

  console.log('🍕',userClothes);
  return (
    <div className="closet-view">
      <h1>Closet</h1>
      <Link to={'/cabin'}>
        <button>Back</button>
      </Link>
    </div>
  );
};

export default ClosetView;