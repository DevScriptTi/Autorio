import React, { createContext } from 'react'

const DashNavUppContext = createContext({})

export const DashboardNavUpBarContext = ({children}) => {
  return (
    <DashNavUppContext.Provider value={{}}>
        {children}
    </DashNavUppContext.Provider>
  )
}


export const useDashNavUpp = ()=>{
    try {
        const nav = useContext(DashNavUppContext);
        return nav
    } catch (error) {
        throw Error('You should use useDashNavUpp() in DashboardNavUpBarContext provider ');
    }
}
