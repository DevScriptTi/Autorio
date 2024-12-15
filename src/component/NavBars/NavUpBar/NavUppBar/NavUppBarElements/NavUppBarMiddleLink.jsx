import React from "react";
import { Link, useLocation } from "react-router-dom";

export const NavUppBarMiddleLink = ({
  children,
  href,
  type = 'dynamic',
  className = '',
  curent = false,
}) => {
  const location = useLocation();
  return (
    <li>
      {type == "dynamic" ? (
        <a
          className={`${className} px-4 text-title-large  h-full flex items-center max-lg:py-4  ${
            curent
              ? "text-light-primary font-bold  dark:border-dark-primary "
              : "text-light-on-surface dark:text-dark-on-surface"
          }`}
          href={href}
        >
          {children}
        </a>
      ) : (
        <Link
          className={`px-4 text-title-large  h-full flex items-center max-lg:py-4  ${
            curent
              ? "text-light-primary font-bold  dark:border-dark-primary "
              : "text-light-on-surface dark:text-dark-on-surface"
          }`}
          to={href}
        >
          {children}
        </Link>
      )}
    </li>
  );
};
