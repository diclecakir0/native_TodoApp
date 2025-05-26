import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [avaibleUser, setAvaibleUser] = useState(false);

  return (
    <DataContext.Provider value={{ avaibleUser, setAvaibleUser }}>
      {children}
    </DataContext.Provider>
  );
};