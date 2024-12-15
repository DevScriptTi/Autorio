import React from 'react'
import { SpeedSearch } from './SpeedSearch'
import { Items } from './Items'

export const Search = () => {
  return (
    <div className='py-6 px-8 flex flex-col gap-6'>
        <SpeedSearch/>
        <Items/>
    </div>
  )
}
