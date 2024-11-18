import axios from "axios";
import { setUserData } from "../redux/actions/appAction";

// Use the environment variables
const API_URL = "http://192.168.1.15:8000/";
// const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
// const API_URL2 = process.env.REACT_APP_API_URL2;

export const registerFetch = async (registerData) => {
  try {
    const response = await axios.post(
      `${API_URL}api/v1.0/auth/signin/`,
      registerData,
      {
        headers: {
          "x-api-key": API_KEY,
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data) {
      localStorage.setItem("userData", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

export const LoginFetch = async (loginData, dispatch) => {
  try {
    const response = await axios.post(
      `${API_URL}api/v1.0/auth/login/`,
      loginData,
      {
        headers: {
          "x-api-key": API_KEY,
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data) {
      dispatch(setUserData(response.data));
    }

    return response.data;
  } catch (error) {
    if (error.response) {
      const errorMessage =
        error.response.data.detail || "An error occurred. Please try again.";
      throw new Error(errorMessage);
    } else {
      throw new Error("Network error. Please check your connection.");
    }
  }
};

export const forgotPassword = async (email) => {
  try {
    const response = await axios.post(
      `${API_URL}api/v1.0/auth/otp/request/`,
      { email },
      {
        headers: {
          "x-api-key": API_KEY,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    // Extract a readable error message
    const errorMessage =
      error.response?.data?.error || "An unexpected error occurred. Please try again.";
    console.error("Forgot Password error:", errorMessage);
    throw new Error(errorMessage);
  }
};

export const resetPassword = async (data) => {
  try {
    const response = await axios.post(
      `${API_URL}api/v1.0/auth/otp/confirm/`,
      data,
      {
        headers: {
          "x-api-key": API_KEY,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    // Extract a readable error message
    const errorMessage =
      error.response?.data?.error || "An unexpected error occurred. Please try again.";
    console.error("Reset Password error:", error);
    throw new Error(errorMessage);
  }
}


export const getProducts = async () => {
  try {
    const response = await axios.get(
      `${API_URL}api/v1.0/products/`,
      // `${API_URL}products`,
      {
        headers: {
          "x-api-key": API_KEY,
        },
      }
    );
    // console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Get Products error:", error);
    throw error;
  }
};
