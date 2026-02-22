import React, { createContext, useState } from "react";

export const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  const [value, setValue] = useState(null); // dummy state for now

  return (
    <GeneralContext.Provider value={{ value, setValue }}>
      {children}
    </GeneralContext.Provider>
  );
};