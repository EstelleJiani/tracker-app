import { createContext, useContext, useState } from 'react';
import { colors } from '../styles/colors';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(colors.light);

  const toggleTheme = () => {
    setTheme(theme === colors.light ? colors.dark : colors.light);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);