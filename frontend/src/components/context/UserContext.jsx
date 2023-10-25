import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userClothes, setUserClothes] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);

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

  useEffect(() => {
    if (!dataFetched) {
      fetchUserClothing();
    }
  }, [dataFetched]);

  return (
    <UserContext.Provider value={{ userClothes }}>
      {children}
    </UserContext.Provider>
  );
};