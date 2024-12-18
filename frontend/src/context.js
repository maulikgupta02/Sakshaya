import React, { createContext, useState } from 'react';

// Create the context
const MyContext = createContext();

// Create a provider component
const MyProvider = ({ children }) => {
  const [user, setUser] = useState("johndoe");
  const [type, setType] = useState("securepassword");

  return (
    <MyContext.Provider value={{ user, setUser, type, setType }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
