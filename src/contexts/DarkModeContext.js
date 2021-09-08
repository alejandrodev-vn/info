import React, { createContext, useState } from 'react';

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const handleChangeDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <DarkModeContext.Provider value={{ isDarkMode, handleChangeDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
