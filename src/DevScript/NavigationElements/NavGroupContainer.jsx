import React from "react";
import { useNav } from "./NavigationContext";

export const NavGroupContainer = ({ children, title }) => {
  const {shrunk}= useNav()
  return (
    <div className="flex flex-col my-4 gap-2">
      <span className={`text-lable-small ${shrunk && 'flex justify-center'} text-light-on-surface dark:text-dark-on-surface`}>{title}</span>
      <div className="flex flex-col">{children}</div>;
    </div>
  );
};
