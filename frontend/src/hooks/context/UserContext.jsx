import { createContext, useReducer } from "react";
import axios from 'axios';

import { backendURL } from "../../utils/_constants";
import userDataReducer, { SET_USER, HANDLE_LOGIN, HANDLE_LOGOUT, SET_USER_CLOTHES, SET_USER_WARDROBE } from "./UserDataReducer";

export const UserContext = createContext();

const initialUserData = {
  isLoggedIn: false,
  user: {},
  clothes: [],
  wardrobe: [],
  loading: true,
};

export const UserProvider = ({ children }) => {

  const [userData, dispatchUserData] = useReducer(userDataReducer, initialUserData);

  const loginStatus = () => {
    return axios.get(`${backendURL}/api/logged_in`, { withCredentials: true })
      .then(res => {
        if (res.data.logged_in) {
          dispatchUserData({
            type: HANDLE_LOGIN,
            user: res.data
          });
        } else {
          dispatchUserData({
            type: HANDLE_LOGOUT
          });
        }
        return res;
      })
      .catch(error => {
        console.error('Error checking login status:', error);
      });
  };

  const login = (user) => {
    axios.post(`${backendURL}/api/login`, { user }, { withCredentials: true })
      .then(res => {
        if (res.data.logged_in) {
          dispatchUserData({
            type: HANDLE_LOGIN,
            user: res.data
          });
          console.log('Login Response:',res);
        } else {
          console.error("Error logging in - api errors:", res.data.errors);
        }
      })
      .catch(error => {
        console.error("Error logging in:", error);
      });
  };

  const getUserByID = (userID) => {
    axios.get(`${backendURL}/api/users?id=${userID}`)
      .then(res => {
        dispatchUserData({
          type: SET_USER,
          user: res.data,
        });
      })
      .catch(error => {
        console.error("Error fetching user details", error);
      });
  };

  const getUserClothes = (userID) => {
    axios.get(`${backendURL}/api/users/${userID}/get_user_clothes`)
      .then(res => {
        dispatchUserData({
          type: SET_USER_CLOTHES,
          clothes: res.data,
        });
      })
      .catch(error => {
        console.error("Error fetching user's clothes", error);
      });
  };

  const setUserClothes = (clothes) => {
    return axios.put(`${backendURL}/api/users/${userID}/set_user_clothes`, { clothes })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.error("Error setting user's clothes", error);
      });
  };

  const getUserWardrobe = (userID) => {
    axios.get(`${backendURL}/api/users/${userID}/get_user_wardrobe`)
      .then(res => {
        dispatchUserData({
          type: SET_USER_WARDROBE,
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
      loginStatus,
      login,
      getUserByID,
      getUserClothes,
      setUserClothes,
      getUserWardrobe,
    }}>
      {children}
    </UserContext.Provider>
  );
};