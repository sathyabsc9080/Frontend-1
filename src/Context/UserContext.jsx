import React, { createContext, useState } from "react";

// 1. Create the context
export const UserContext = createContext();

// 2. Create the Provider to wrap your app
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name:"John",
    email: "Sathya@gmail.com",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
