import React from 'react'

export const DashboardContent = ({children,title}) => {
  return (
    <>
        <h1
            className='text-headline-large font-bold mb-6 text-light-primary dark:text-dark-primary'
        >
            {title}
        </h1>
        {children}
    </>
  )
}
