import axios from "axios";

const API_KEY = process.env.REACT_APP_EXCHANGE_RATE_API_KEY;
const BASE_URL = process.env.REACT_APP_EXCHANGE_RATE_URL;

export const SET_CURRENCY = "SET_CURRENCY";
export const SET_CURRENCIES = "SET_CURRENCIES";

// Fallback rates with country data
const fallbackRates = {
  USD: { rate: 1, symbol: "$", country: "United States" },
  EUR: { rate: 0.85, symbol: "€", country: "Eurozone" },
  KES: { rate: 110.0, symbol: "KSh", country: "Kenya" },
  UGX: { rate: 3700.0, symbol: "USh", country: "Uganda" },
  TZS: { rate: 2300.0, symbol: "TSh", country: "Tanzania" },
  RWF: { rate: 1200.0, symbol: "FRw", country: "Rwanda" },
  BIF: { rate: 2070.0, symbol: "FBu", country: "Burundi" },
  ETB: { rate: 55.0, symbol: "Br", country: "Ethiopia" },
  SOS: { rate: 570.0, symbol: "Sh", country: "Somalia" },
  SDG: { rate: 700.0, symbol: "SDG", country: "Sudan" },
};

// Utility function to fetch rates from the API
const fetchRates = async () => {
  try {
    // Fetch rates from external API
    const response = await axios.get(BASE_URL + `access_key=${API_KEY}`);
    const rates = response.data.rates;

    // Merge fetched rates with fallback data, filtering based on fallback data keys
    const mergedRates = Object.keys(fallbackRates).reduce((acc, currency) => {
      if (rates[currency]) {
        // If the rate is available from the API, update the rate and keep fallback symbol & country
        acc[currency] = {
          rate: rates[currency],
          symbol: fallbackRates[currency].symbol,
          country: fallbackRates[currency].country,
        };
      } else {
        // If no rate is available from the API, fall back to the fallback data
        acc[currency] = fallbackRates[currency];
      }
      return acc;
    }, {});
    
    return mergedRates;
  } catch (error) {
    // Silently handle the error and return fallback rates
    // console.error("Error fetching rates, using fallback data.");
    return fallbackRates;
  }
};

// Utility function to get rates from local storage
const getRatesFromLocalStorage = () => {
  const storedData = localStorage.getItem("currencyRates");
  if (!storedData) return null;

  const { data, expiry } = JSON.parse(storedData);
  if (new Date() > new Date(expiry)) {
    // Data is expired
    localStorage.removeItem("currencyRates");
    return null;
  }

  return data;
};

// Function to save rates to local storage
const saveRatesToLocalStorage = (rates) => {
  const expiryTime = new Date();
  expiryTime.setHours(expiryTime.getHours() + 24); // Set expiry to 24 hours

  localStorage.setItem("currencyRates", JSON.stringify({
    data: rates,
    expiry: expiryTime.toISOString(),
  }));
};

// Action to fetch currencies (check local storage first)
export const fetchCurrencies = () => {
  return async (dispatch) => {
    let rates = getRatesFromLocalStorage();
    
    if (!rates) {
      // Fetch fresh data if not found in local storage or expired
      rates = await fetchRates();
      saveRatesToLocalStorage(rates);  // Save fetched data to local storage
    }

    const currencyNames = Object.keys(rates);

    dispatch({
      type: SET_CURRENCIES,
      payload: currencyNames,
    });
  };
};

// Action to set the selected currency
export const setCurrency = (currencyName) => {
  return async (dispatch) => {
    let rates = getRatesFromLocalStorage();

    if (!rates) {
      // Fetch fresh data if not found in local storage or expired
      rates = await fetchRates();
      saveRatesToLocalStorage(rates);  // Save fetched data to local storage
    }

    if (rates[currencyName]) {
      dispatch({
        type: SET_CURRENCY,
        payload: {
          currencyName,
          currencyRate: rates[currencyName].rate,
          currencySymbol: rates[currencyName].symbol,
          currencyCountry: rates[currencyName].country, // Added country
        },
      });
    } else {
      console.error(`Currency ${currencyName} not found in rates.`);
    }
  };
};
