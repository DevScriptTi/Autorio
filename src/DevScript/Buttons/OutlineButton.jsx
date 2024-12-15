import { Plus } from "lucide-react";
import React from "react";

export const OutlineButton = ({ children = "Outline Button" ,type = "button" , onClick = ()=>{} , className = ""}) => {
  return <button onClick={onClick} className={`px-4 text-lable-large border-2 border-light-primary dark:border-dark-primary text-light-primary dark:text-dark-primary focus:outline-none ring-4 ring-offset-2 ring-offset-light-surface dark:ring-offset-dark-surface ring-light-surface dark:ring-dark-surface focus:ring-light-primary dark:focus:ring-dark-primary h-10 rounded-full hover:border-opacity-60 hover:text-opacity-60 transition-colors duration-200 ease-linear ${className}`}>{children}</button>;
}; 

export const IconOutlineButton = ({ children = "Icon Outline Button" , icon = <Plus/>, type = "button" , onClick = ()=>{} , className = ""}) => {
    return <button onClick={onClick} className={`ps-2 pe-4 flex items-center gap-2 text-lable-large border-2 border-light-primary dark:border-dark-primary text-light-primary dark:text-dark-primary focus:outline-none ring-4 ring-offset-2 ring-offset-light-surface dark:ring-offset-dark-surface ring-light-surface dark:ring-dark-surface focus:ring-light-primary dark:focus:ring-dark-primary h-10 rounded-full hover:border-opacity-60 hover:text-opacity-60 transition-colors duration-200 ease-linear ${className}`}>
        <span>{icon}</span>
        <span>{children}</span>
    </button>;
  }; 

