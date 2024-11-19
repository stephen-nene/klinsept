const initialState = {
  darkMode: localStorage.getItem("darkMode") === "true" || false,
  authData: {
    loggedIn: false,
  },
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DARK_MODE":
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    case "SET_USER_DATA":
      return {
        ...state,
        authData: {
          loggedIn: true,
          ...action.payload,
        },
      };
    case "LOGOUT_USER_DATA":
      return {
        ...state,
        authData: {
          loggedIn: false, 
          user: null
        },
      };
    default:
      return state;
  }
};

export default appReducer;
