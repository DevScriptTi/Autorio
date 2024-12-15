import { Moon, Sun } from "lucide-react";
import React, { useState } from "react";

export const NavUppBarMode = () => {
  const [mode ,setMode] = useState(localStorage.getItem('mode'))
  const html = document.getElementsByTagName('html')[0];
  console.log(mode)
  const switchMode = ()=>{
    if (mode === 'dark') {
      setMode('light');
      localStorage.setItem('mode' ,"light")
      html.className = 'light'
    } else {
      setMode('dark');
      localStorage.setItem('mode' ,"dark")
      html.className = 'dark'
    }
  }
  return (
    <button onClick={switchMode} className="size-8 ms-4 flex justify-center items-center text-light-primary dark:text-dark-primary *:size-full">
      { mode === "dark" ? <Sun /> : <Moon/>}
    </button>
  );
};
