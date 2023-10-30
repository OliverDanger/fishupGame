import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [dataFetched, setDataFetched] = useState(false);
  const [userClothes, setUserClothes] = useState([]);
  const [clothesDetails, setClothesDetails] = useState(false);

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

  const fetchClothingDetails = () => {
    axios.get(`http://localhost:3001/api/clothing_articles?ids=${userClothes.map(userCloth => userCloth.clothing_article_id).join(',')}`)
      .then(res => {
        setClothesDetails(res.data);
        console.log('Aaaaaaaaa', clothesDetails);
      })
      .catch(error => {
        console.error("Error fetching clothing details", error);
      });
  };

  useEffect(() => {
    if (!dataFetched) {
      fetchUserClothing();
    }
  }, [dataFetched]);

  useEffect(() => {
    fetchClothingDetails();
  }, [userClothes]);

  return (
    <UserContext.Provider value={{ userClothes, clothesDetails }}>
      {children}
    </UserContext.Provider>
  );
};