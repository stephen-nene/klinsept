import React, { useState } from 'react';
import i18n from '../helpers/i18n';
function LanguageCurrencyChanger() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');


  const handleLanguageChange = (event) => {
    const language = event.target.value;
    console.log(language)
    setSelectedLanguage(language);
      i18n.changeLanguage(language);
    };

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
    // Implement logic to change currency (e.g., update state, change pricing, etc.)
  };

  return (
    <div className="language-currency-changer">
      <div className="language-selector">
        <select 
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
        <select 
          value={selectedCurrency} 
          onChange={handleCurrencyChange} 
          className="form-select"
        >
          <option value="USD">USD</option>
          <option value="Burundian Francs">BIF</option>
          {/* Add more currencies as needed */}
        </select>
      </div>
    </div>
  );
}

export default LanguageCurrencyChanger;
