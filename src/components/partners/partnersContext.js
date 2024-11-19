import { createContext, useContext, useState } from "react";
const storeContext = createContext();

export default function ContextProvider({ children }) {
  const [filters, setFilters] = useState({});

  const stats = {
    filters,
    setFilters,
  };

  return (
    <storeContext.Provider value={stats}>{children}</storeContext.Provider>
  );
}

export const usePartnersContext = () => {
  return useContext(storeContext);
};
