import React, { useEffect, useState } from 'react'

export const Picture = ({item}) => {
  const [imgs , setImgs] = useState(item.product.pictures)
  useEffect(()=>{
    console.log(imgs)
  })
  return (
    <div
      className='w-[350px] bg-light-surface-container-low dark:bg-dark-surface-container-lowest'
    >
      <img className='h-full' src="" alt="" />
    </div>
  )
}
