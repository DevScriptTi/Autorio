import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import React from "react";
import { useNav } from "./NavigationContext";

export const NavMode = () => {
  const {shrunk , setShrunk}= useNav()
  return <button onClick={()=>{setShrunk(!shrunk)}} className={`px-2 ${shrunk && 'flex justify-center'} text-light-on-surface dark:text-dark-on-surface`} >{shrunk?<ArrowBigLeft/>:<ArrowBigRight/>}</button>;
};
