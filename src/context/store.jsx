import { createContext, useContext, useState } from "react";
const storeContext = createContext();

export default function ContextProvider({ children }) {
  const [theme, setTheme] = useState({
    primaryColor: "#C2410C",
    secondary: "#1E40AF",
    tertiary: "#e5e7eb",
  });

  const stats = {
    theme,
    setTheme,
  };

  return (
    <storeContext.Provider value={stats}>{children}</storeContext.Provider>
  );
}

export const useStateContext = () => {
  return useContext(storeContext);
};
