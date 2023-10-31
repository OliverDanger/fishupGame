import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [dataFetched, setDataFetched] = useState(false);
  const [userClothes, setUserClothes] = useState([]);
  const [clothesDetails, setClothesDetails] = useState([]);

  // constant for testing
  const userID = 1;

  // fetch clothes owned by user matching the userID constant
  const fetchUserClothing = () => {
    axios.get(`http://localhost:3001/api/users/${userID}/owned_clothing`)
      .then(res => {
        setUserClothes(res.data);
        setDataFetched(true);
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
        console.log('Aaaaaaaaa', res.data);
      })
      .catch(error => {
        console.error("Error fetching clothing details", error);
      });
  };

  // on start fetches user clothing, then after data fetched is set to true, fetches details for the provided user clothing
  useEffect(() => {
    if (!dataFetched) {
      fetchUserClothing();
    }
    if (userClothes.length > 0 && clothesDetails.length === 0) {
      const clothingIds = userClothes.map(userCloth => userCloth.clothing_article_id);
      fetchClothingDetails(clothingIds);
    }
  }, [dataFetched]);


  return (
    <UserContext.Provider value={{ userClothes, clothesDetails, setDataFetched }}>
      {children}
    </UserContext.Provider>
  );
};