// context/GlobalContext.jsx
import { createContext, useState, useContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <GlobalContext.Provider value={{ selectedId, setSelectedId }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }
  return context;
};
