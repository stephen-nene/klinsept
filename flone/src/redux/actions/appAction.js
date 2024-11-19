// appAction.js


// Action to set the user data
export const setUserData = (userData) => {
  return {
    type: "SET_USER_DATA",
    payload: userData,
  };
};

export const logoutUser = () => {
  localStorage.removeItem('redux_localstorage_simple'); // or specific keys

  return {
    type: "LOGOUT_USER_DATA",
    payload: null,
  };
}

export const setDarkMode = () => {
  return {
    type: "SET_DARK_MODE",
  };
};
