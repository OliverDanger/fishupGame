import { createContext, useReducer } from "react";
import axios from 'axios';

import { backendURL } from "../../utils/_constants";
import userDataReducer, { GET_USER, GET_USER_CLOTHES, GET_USER_WARDROBE } from "./UserDataReducer";

export const UserContext = createContext();

const initialUserData = {
  user: null,
  clothes: null,
  wardrobe: null,
  loading: true,
};

export const UserProvider = ({ children }) => {

  const [userData, dispatchUserData] = useReducer(userDataReducer, initialUserData);

  const getUserByID = (userID) => {
    axios.get(`${backendURL}/api/users?id=${userID}`)
      .then(res => {
        dispatchUserData({
          type: GET_USER,
          user: res.data,
        });
      })
      .catch(error => {
        console.error("Error fetching user details", error);
      });
  };

  const getUserClothes = (userID) => {
    axios.get(`${backendURL}/api/users/${userID}/owned_clothing`)
      .then(res => {
        dispatchUserData({
          type: GET_USER_CLOTHES,
          clothes: res.data,
        });
      })
      .catch(error => {
        console.error("Error fetching user's clothes", error);
      });
  };

  const getUserWardrobe = (userID) => {
    axios.get(`${backendURL}/api/users/${userID}/get_user_wardrobe`)
      .then(res => {
        dispatchUserData({
          type: GET_USER_WARDROBE,
          wardrobe: res.data,
        });
      })
      .catch(error => {
        console.error("Error fetching clothing details", error);
      });
  };


  return (
    <UserContext.Provider value={{
      userData,
      dispatchUserData,
      getUserByID,
      getUserClothes,
      getUserWardrobe,
    }}>
      {children}
    </UserContext.Provider>
  );
};