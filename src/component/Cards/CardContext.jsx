import React, { createContext, useContext } from 'react'

const CardProvider = createContext({})

export const CardContext = ({children}) => {
  return (
    <CardProvider.Provider>
        {children}
    </CardProvider.Provider>
  )
}

export const useCard = ()=>{
    try {
        const card = useContext(CardProvider)
        return card 
    } catch (error) {
        throw Error('you should use useCard in CardContext provider')
    }
}
