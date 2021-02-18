import React, { createContext, useState, useContext } from "react";

const initialState = {
  isDarkMode: false,
  toggleDarkMode: () => {}
};

const DarkModeContext = createContext(initialState);

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(initialState.isDarkMode);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <DarkModeContext.Provider value={{ isDarkMode: darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);

export const wrapWithProvider = ({ element }) => (
  <DarkModeProvider>{element}</DarkModeProvider>
);

export default DarkModeContext;
