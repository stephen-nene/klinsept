import { SET_CURRENCY, SET_CURRENCIES } from "../actions/currencyActions";

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

const initState = {
  currencySymbol: fallbackRates.KES.symbol,
  currencyName: "KES",
  currencyRate: fallbackRates.KES.rate,
  availableCurrencies: Object.keys(fallbackRates),
};

const currencyReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CURRENCY: {
      const { currencyName, currencyRate } = action.payload;
      const currencySymbol = fallbackRates[currencyName]?.symbol || "$"; // Default to $ if not found

      return {
        ...state,
        currencySymbol,
        currencyRate,
        currencyName,
      };
    }
    case SET_CURRENCIES: {
      return {
        ...state,
        availableCurrencies: action.payload,
      };
    }
    default:
      return state;
  }
};

export default currencyReducer;
