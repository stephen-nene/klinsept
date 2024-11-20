import { SET_CURRENCY, SET_CURRENCIES,SET_TIMESTAMP } from "../actions/currencyActions";

const initState = {
  currencies: {
    USD: {
      name: "USD",
      symbol: "$",
      rates: 1.0,
      country: "United States",
    },
    EUR: {
      name: "EUR",
      symbol: "€",
      rates: 0.9,
      country: "European Union",
    },
    KES: {
      name: "KES",
      symbol: "KSh",
      rates: 110.0,
      country: "Kenya",
    },
    UGX: {
      name: "UGX",
      symbol: "USh",
      rates: 3700.0,
      country: "Uganda",
    },
    TZS: {
      name: "TZS",
      symbol: "TSh",
      rates: 2300.0,
      country: "Tanzania",
    },
    RWF: {
      name: "RWF",
      symbol: "FRw",
      rates: 1150.0,
      country: "Rwanda",
    },
    BIF: {
      name: "BIF",
      symbol: "FBu",
      rates: 1900.0,
      country: "Burundi",
    },
    ETB: {
      name: "ETB",
      symbol: "Br",
      rates: 50.0,
      country: "Ethiopia",
    },
    SOS: {
      name: "SOS",
      symbol: "Sh",
      rates: 600.0,
      country: "Somalia",
    },
    SDG: {
      name: "SDG",
      symbol: "ج.س.",
      rates: 450.0,
      country: "Sudan",
    },
  },
  timestamp: null,
};

const currencyReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CURRENCY: {
      return {
        ...state,
        selectedCurrency: action.payload,
      };
    }

    case SET_CURRENCIES: {
      const updatedCurrencies = { ...state.currencies };

      // Update only the rates of each currency in the store
      Object.keys(action.payload).forEach((currency) => {
        if (updatedCurrencies[currency]) {
          updatedCurrencies[currency] = {
            ...updatedCurrencies[currency],
            rates: action.payload[currency],
          };
        }
      });

      return {
        ...state,
        currencies: updatedCurrencies,
      };
    }
    case SET_TIMESTAMP:
      return {
        ...state,
        timestamp: action.payload, // Set the timestamp of the last update
      };
    default:
      return state;
  }
};

export default currencyReducer;
