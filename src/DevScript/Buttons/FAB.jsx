import {  Plus } from 'lucide-react'
import React from 'react'

export const FAB = ({children = <Plus/> , onClick = ()=>{}}) => {
  return (
    <button onClick={onClick} className='flex items-center px-4 size-14  bg-light-primary-container dark:bg-dark-pribg-light-primary-container text-light-on-primary-container dark:text-dark-on-pritext-light-on-primary-container rounded-lg hover:bg-opacity-50 transition-colors duration-200 ease-linear max-lg:fixed bottom-4 end-4 shadow-lg'>
        {children}
    </button>
  )
}

