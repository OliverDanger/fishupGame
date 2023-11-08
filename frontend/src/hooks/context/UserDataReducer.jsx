export const SET_USER = 'SET_USER';
export const SET_USER_CLOTHES = 'SET_USER_CLOTHES';
export const SET_USER_WARDROBE = 'SET_USER_WARDROBE';

const userDataReducer = (state, action) => {
  switch (action.type) {

    case SET_USER:
      return {
        ...state,
        user: action.user,
        loading: false,
      };

    case SET_USER_CLOTHES:
      return {
        ...state,
        clothes: action.clothes,
        loading:false,
      };

    case SET_USER_WARDROBE:
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