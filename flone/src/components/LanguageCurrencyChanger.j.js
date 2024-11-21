import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrency,
  fetchCurrencyRates,
} from "../redux/actions/currencyActions";
import i18n from "../helpers/i18n";

function LanguageCurrencyChanger() {
  const availableCurrencies = useSelector((state) => state.currencyData);

  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [selectedCurrency, setSelectedCurrency] = useState(
    availableCurrencies?.selectedCurrency?.name || "USD"
  );
  const dispatch = useDispatch();
  // console.log(availableCurrencies);
  useEffect(() => {
    dispatch(fetchCurrencyRates());
  }, [dispatch]);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="language-currency-changer">
      <div className="language-selector">
        {/* <label htmlFor="language-select">Language:</label> */}
        <select
          id="language-select"
          value={selectedLanguage}
          onChange={handleLanguageChange}
          className="form-select"
        >
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="sw">Swahili</option>
        </select>
      </div>

      <div className="currency-selector">
        {/* <label htmlFor="currency-select">Currency:</label> */}
        <select
          id="currency-select"
          value={selectedCurrency}
          onChange={(e) => {
            const selectedCurrencyData =
              availableCurrencies.currencies[e.target.value];
            setSelectedCurrency(e.target.value);
            dispatch(setCurrency(selectedCurrencyData));
          }}
          className="form-select"
        >
          {Object.entries(availableCurrencies.currencies).map(
            ([currencyKey, currencyData]) => {
              return (
                <option key={currencyKey} value={currencyKey}>
                  {currencyData.name} ({currencyData.country})
                </option>
              );
            }
          )}
        </select>
      </div>
    </div>
  );
}

export default LanguageCurrencyChanger;
