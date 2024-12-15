import { nanoid } from 'nanoid';
import React  from 'react'

export const Modal = ({children, id = nanoid()}) => {
    
    document.addEventListener('click' , (e)=>{
        if (e.target.getAttribute('id') == id) {
            document.getElementById(id).classList.add("hidden");
        }
    })
    
    return (
        <div
            id={id}
            className='fixed z-40 inset-0 flex place-content-center place-items-center bg-black/70 hidden'
        >
            {children}
        </div>
    )
}
