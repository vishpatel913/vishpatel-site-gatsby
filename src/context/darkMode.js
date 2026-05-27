import React, { createContext, useState, useContext, useMemo } from "react";

const initialState = {
  isDarkMode: false,
  toggleDarkMode: () => {}
};

const DarkModeContext = createContext(initialState);

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(initialState.isDarkMode);
  const value = useMemo(
    () => ({
      isDarkMode: darkMode,
      toggleDarkMode: () => setDarkMode(prev => !prev)
    }),
    [darkMode]
  );

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);

export const wrapWithProvider = ({ element }) => (
  <DarkModeProvider>{element}</DarkModeProvider>
);

export default DarkModeContext;
