import React, { createContext, useContext, useState } from "react";
const NavContext = createContext({  shrunk:'', setShrunk :()=>{}});
export const NavigationContext = ({ children }) => {
  const [shrunk, setShrunk] = useState(true);
  return (
    <NavContext.Provider value={{  shrunk, setShrunk }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => {
  try {
    const nav = useContext(NavContext);
    return nav;
  } catch (error) {
    throw Error("You should use useNav in NavigationContext")
  }
};
