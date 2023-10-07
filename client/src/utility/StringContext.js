import React, { createContext, useState } from "react";

// Create a context
const StringContext = createContext();

// Create a provider component to wrap your app
const StringProvider = ({ children }) => {
  const [sharedString, setSharedString] = useState("");

  const updateString = (newString) => {
    setSharedString(newString);
  };

  return (
    <StringContext.Provider value={{ sharedString, updateString }}>
      {children}
    </StringContext.Provider>
  );
};

export { StringProvider, StringContext };
