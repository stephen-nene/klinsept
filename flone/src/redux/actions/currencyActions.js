import axios from "axios";

export const SET_CURRENCIES = "SET_CURRENCIES";
export const SET_CURRENCY = "SET_CURRENCY";
export const SET_TIMESTAMP = "SET_TIMESTAMP";

const EXCHANGE_RATE_URL = process.env.REACT_APP_EXCHANGE_RATE_URL || "https://v6.exchangerate-api.com/v6/9f26ee59f307d55639cb119b/latest/BIF";
// Define the list of currencies you want to track
// const trackedCurrencies = ['USD', 'EUR', 'KES', 'UGX', 'TZS', 'RWF', 'BIF', 'ETB', 'SOS', 'SDG'];

export const setCurrency = (currencyData) => {
  return {
    type: "SET_CURRENCY",
    payload: currencyData,
  };
};

export const setCurrencies = (rates) => {
  return {
    type: "SET_CURRENCIES",
    payload: rates,
  };
};

// Action to set the timestamp when the rates were last updated
export const setTimestamp = (timestamp) => ({
  type: SET_TIMESTAMP,
  payload: timestamp,
});
// Fetch currency rates from external API
export const fetchCurrencyRates = () => async (dispatch, getState) => {
  const nextUpdate = getState().currencyData.timestamp;

  if (nextUpdate && Date.now() < nextUpdate * 1000) {
    // console.log("Rates are still valid");
    return;
  }

  try {
    const response = await axios.get(EXCHANGE_RATE_URL);

    const { conversion_rates, time_next_update_unix } = response.data;
    dispatch(setCurrencies(conversion_rates));
    dispatch(setTimestamp(time_next_update_unix));
  } catch (error) {
    console.error("Error fetching currency rates:", error);
  }
};


export const priceConverter = (price, selectedCurrency) => {
  let convertedPrice = price;
  let currencySymbol = "$";

  if (selectedCurrency) {
    const { rates, symbol } = selectedCurrency;
    convertedPrice = (price * rates).toFixed(2);
    currencySymbol = symbol || "$";
  }
  convertedPrice = parseFloat(convertedPrice).toLocaleString();

  return { convertedPrice, currencySymbol };
};

