import React, { createContext, useContext } from 'react'

const NavUppContext = createContext({})

export const NavUppBarContext = ({children}) => {
  return (
    <NavUppContext.Provider value={{}}>
      {children}
    </NavUppContext.Provider>
  )
}

export const useNavUpp = ()=>{
    try {
        const nav = useContext(NavUppBarContext);
        return nav
    } catch (error) {
        throw Error('You should use useNavUpp() in NavUppBarContext provider ');
    }
}