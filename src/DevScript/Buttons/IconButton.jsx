import React from 'react'

export const IconButton = ({children,onClick=()=>{} , className}) => {
  return (
    <button className={`${className}  hover:opacity-60`} onClick={onClick}>
        {children}
    </button>
  )
}
