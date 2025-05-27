import React, { createContext, useState, useContext } from "react";

// Create Context
const CurrencyContext = createContext();

// Custom Hook to use currency context
export const useCurrency = () => useContext(CurrencyContext);

// Provider Component
export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("₹");

  const handleCurrencyChange = (symbol) => {
    setCurrency(symbol);
  };

  return (
    <CurrencyContext.Provider value={{ currency, handleCurrencyChange }}>
      {children}
    </CurrencyContext.Provider>
  );
};
