import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [userInfo, setUserInfo] = useState({ id: null });
  const [userClothes, setUserClothes] = useState([]);
  const [clothesDetails, setClothesDetails] = useState([]);

  // constant for testing
  const userID = 1;

  //fetch user info matching user ID then call fetchUserClothing
  const fetchUserByID = (userID) => {
    axios.get(`http://localhost:3001/api/users?id=${userID}`)
      .then(res => {
        setUserInfo(res.data);
      })
      .catch(error => {
        console.error("Error fetching user details", error);
      });
  };

  // fetch clothes owned by user matching the userID constant
  const fetchUserClothing = (userID) => {
    axios.get(`http://localhost:3001/api/users/${userID}/owned_clothing`)
      .then(res => {
        setUserClothes(res.data);
      })
      .catch(error => {
        console.error("Error fetching user's clothes", error);
      });
  };

  // fetch clothing details from provided array of clothing ids
  const fetchClothingDetails = (clothingIds) => {
    axios.get(`http://localhost:3001/api/clothing_articles?ids=${clothingIds.join(',')}`)
      .then(res => {
        setClothesDetails(res.data);
      })
      .catch(error => {
        console.error("Error fetching clothing details", error);
      });
  };

  useEffect(() => {
    if (userInfo.id === null) {
      fetchUserByID(userID);
      fetchUserClothing(userID);
    }
  }, []);

  useEffect(() => {
    const clothingIds = userClothes.map(item => item.clothing_article_id);
    fetchClothingDetails(clothingIds);
  }, [userClothes]);


  // useEffect(() => {
  //   if (userInfo.id === null) {
  //     fetchUserByID(userID);
  //   }
  //   if (userClothes.length === 0) {
  //     fetchUserClothing(userID);
  //   }
  //   if (userInfo.id !== null && userClothes.length > 0 && clothesDetails.length === 0) {
  //     const clothingIds = userClothes.map(item => item.clothing_article_id);
  //     fetchClothingDetails(clothingIds);
  //   }
  // }, [userInfo, userClothes, clothesDetails, userID]);



  return (
    <UserContext.Provider value={{ userInfo, userClothes, clothesDetails }}>
      {children}
    </UserContext.Provider>
  );
};