import React from 'react'
import { SubHead } from '../Framwork'
import { Input } from '../../FormElements/Inputs/Input'

export const Inputs = () => {
  return (
    <div
        className='flex flex-col gap-4 items-start max-w-[250px]'
    >
        <SubHead>Inputs</SubHead>
        <Input error={{message: "There are a mistake here"}}/>
        <Input/>
    </div>
  )
}
