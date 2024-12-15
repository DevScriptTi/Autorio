import React from "react";

export const NavUppBarMiddleNav = ({children}) => {
  return (
    <nav
      id="nav"
      className="lg:flex-1 self-stretch hidden lg:block max-lg:absolute max-lg:top-full max-lg:inset-x-0  max-lg:bg-light-surface-container-low  dark:max-lg:bg-dark-surface-container-low  max-lg:z-20"
    >
      <ul className="w-full h-full flex  justify-center max-lg:flex-col max-lg:divide-y max-lg:divide-light-outline-variant dark:max-lg:divide-dark-outline-variant">
        {children}
      </ul>
    </nav>
  );
};
