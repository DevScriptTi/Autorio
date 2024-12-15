import React from 'react'
import { Card } from '../../../component/Cards/Card'

export const Items = () => {
  return (
    <div
        className='grid grid-cols-resize gap-7'
    >
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}
