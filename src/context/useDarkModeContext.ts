import { createContext, useContext } from "react";
export type DarkModeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};
export const DarkModeContext = createContext<DarkModeContextType | null>(null);

export const useDarkModeContext = () => {
  const context = useContext(DarkModeContext);

  if (!context) {
    console.warn("useDarkModeContext must be used within DarkModeProvider");
  }

  return context;
};
