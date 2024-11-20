import axios from 'axios';

export const SET_CURRENCIES = "SET_CURRENCIES";
export const SET_CURRENCY = "SET_CURRENCY";

// Define the list of currencies you want to track
const trackedCurrencies = ['USD', 'EUR', 'KES', 'UGX', 'TZS', 'RWF', 'BIF', 'ETB', 'SOS', 'SDG'];

export const setCurrency = (currencyData) => {
    return {
      type: "SET_CURRENCY",
      payload: currencyData,
    };
  };
  