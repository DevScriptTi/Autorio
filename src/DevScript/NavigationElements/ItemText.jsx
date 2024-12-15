import React from 'react'
import { useNav } from './NavigationContext'

export const ItemText = ({text="Dev Script" ,type,size = "text-title-large"}) => {
  const {shrunk} = useNav()
  return (
    <span className={`flex flex-col ${size}  ${shrunk && 'absolute -left-2 -translate-x-full bg-light-surface-container-low dark:bg-dark-surface-container-low h-11 rounded-md hidden group-hover:flex items-center justify-center w-32 z-30'}`}>
      <span>{text}</span>
      {type && (<span className='text-lable-large text-light-primary dark:text-dark-primary'>{type}</span>)}
    </span>
  )
}
