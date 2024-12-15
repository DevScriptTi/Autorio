import React from 'react'

export const ProdSearch = () => {
  return (
    <label htmlFor="ProdSearch" className='flex items-center max-w-[720px] mx-auto h-14 px-5 rounded-xl mb-7 border-2 border-light-outline dark:border-dark-outline  has-[:focus]border-light-primary has-[:focus]:dark:border-dark-primary'>
      <input className='w-full bg-transparent focus:outline-none text-light-on-surface dark:text-dark-on-surface text-body-large'  type='text' id='ProdSearch' placeholder='إبحث عن منتجع بالمرجع أو الإسم'/>
    </label>
  )
}
