import { createContext, useContext, useState, useEffect } from "react";
const storeContext = createContext();

export default function ContextProvider({ children }) {
  const [isSidebar, setIsSidebar] = useState(false);
  const [theme, setTheme] = useState({
    primaryColor: "#C2410C",
    secondary: "#1E40AF",
    tertiary: "#e5e7eb",
  });
  const [deviceType, setDeviceType] = useState("desktop");
  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setDeviceType("mobile");
    } else if (width >= 768 && width < 1024) {
      setDeviceType("tablet");
    } else {
      setDeviceType("desktop");
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const stats = {
    theme,
    setTheme,
    isSidebar,
    setIsSidebar,
    deviceType,
    setDeviceType,
  };

  return (
    <storeContext.Provider value={stats}>{children}</storeContext.Provider>
  );
}

export const useStateContext = () => {
  return useContext(storeContext);
};
