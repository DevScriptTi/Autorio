import React from 'react'

export const ItemIcon = ({children ,size = "text-title-large"}) => {
  return (
    <span className={`${size}  `}>{children}</span>
  )
}
