import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userClothes, setUserClothes] = useState([]);

  // constant for testing
  const userID = 1;

  // fetch clothes owned by user matching the userID constant
  useEffect(() => {
    axios.get(`http://localhost:3001/api/users/${userID}/owned_clothing`)
      .then(res => {
        setUserClothes(res.data);
      })
      .catch(error => {
        console.error("Error fetching user's clothes", error);
      });
  }, []);
  
  // Log userClothes whenever it changes
  useEffect(() => {
    console.log('🍕', userClothes);
  }, []);
};