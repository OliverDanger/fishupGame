export const GET_USER = 'GET_USER';
export const GET_USER_CLOTHES = 'GET_USER_CLOTHES';
export const GET_USER_WARDROBE = 'GET_USER_WARDROBE';

const userDataReducer = (state, action) => {
  switch (action.type) {

    case GET_USER:
      return {
        ...state,
        user: action.user,
        loading: false,
      };

    case GET_USER_CLOTHES:
      return {
        ...state,
        clothes: action.clothes,
        loading: false,
      };

    case GET_USER_WARDROBE:
      return {
        ...state,
        wardrobe: action.wardrobe,
        loading: false,
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

export default userDataReducer;