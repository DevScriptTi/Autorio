import { Plus } from "lucide-react";
import React from "react";

export const FilledButton = ({ children = "Filled Button" ,type = "button" , onClick = ()=>{} , className = ""}) => {
  return <button onClick={onClick} className={`px-4 text-lable-large bg-light-primary dark:bg-dark-primary text-light-on-primary dark:text-dark-on-primary focus:outline-none ring-4 ring-offset-2 ring-offset-light-surface dark:ring-offset-dark-surface ring-light-surface dark:ring-dark-surface focus:ring-light-primary dark:focus:ring-dark-primary h-10 rounded-full hover:bg-opacity-75 transition-colors duration-200 ease-linear ${className}`}>{children}</button>;
}; 

export const IconFilledButton = ({ children = "Icon Filled Button" , icon = <Plus/>, type = "button" , onClick = ()=>{} , className = ""}) => {
    return <button onClick={onClick} className={`ps-2 pe-4 flex items-center gap-2 text-lable-large bg-light-primary dark:bg-dark-primary text-light-on-primary dark:text-dark-on-primary focus:outline-none ring-4 ring-offset-2 ring-offset-light-surface dark:ring-offset-dark-surface ring-light-surface dark:ring-dark-surface focus:ring-light-primary dark:focus:ring-dark-primary h-10 rounded-full hover:bg-opacity-75 transition-colors duration-200 ease-linear ${className}`}>
        <span>{icon}</span>
        <span>{children}</span>
    </button>;
  }; 

