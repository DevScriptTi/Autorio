import React from "react";
import { Link } from "react-router-dom";

export const NavUppBarLastBotton = ({children , link}) => {
  return (
    <Link to={link} className="text-title-large px-2 text-light-on-surface dark:text-dark-on-surface">
      {children}
    </Link>
  );
};
