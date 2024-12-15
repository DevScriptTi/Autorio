import React from 'react'

export const CircleUpp = () => {
  return (
    <div className='hidden xl:block size-64 rounded-full bg-light-primary dark:bg-dark-primary absolute top-0 start-0 translate-x-1/2 -translate-y-1/2'></div>
  )
}

export const CircleBottom = () => {
    return (
      <div className='hidden xl:block size-96 rounded-full bg-light-primary dark:bg-dark-primary absolute bottom-0 end-0 -translate-x-1/2 translate-y-1/2'></div>
    )
  }
