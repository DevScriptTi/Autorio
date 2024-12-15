import React from "react";

export const NavUppBarContainer = ({children , color = false}) => {
  return <div className={`relative flex items-center w-full h-full px-2 lg:px-5 ${color && ('bg-light-surface-container-low dark:bg-dark-surface-container-low')}`}>{children}</div>;
};
