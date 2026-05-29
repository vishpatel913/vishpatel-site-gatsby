import React, { createContext, useState, useContext, useMemo } from "react";

type State = {
  isDarkMode: boolean;
  toggleDarkMode(): void;
};

const initialState: State = {
  isDarkMode: false,
  toggleDarkMode: () => {}
};

const DarkModeContext = createContext<State>(initialState);

export const DarkModeProvider: React.FC<React.PropsWithChildren> = ({
  children
}) => {
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

export const wrapWithProvider = ({ element }: any) => (
  <DarkModeProvider>{element}</DarkModeProvider>
);

export default DarkModeContext;
