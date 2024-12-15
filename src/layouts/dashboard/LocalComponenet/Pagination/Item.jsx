import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Item = ({ to, link = { url: "", label: "", active: "" } }) => {
     
  return (
    <li>
      <Link
        to={`/${to}?page=${link.label}`}
        className={`block ${
          link.label === link.active
            ? "bg-light-primary dark:bg-dark-primary text-light-on-primary dark:text-dark-on-primary"
            : "border-2 border-light-primary dark:border-dark-primary text-light-primary dark:text-dark-primary"
        } size-8 text-title-large text-center rounded-md`}
      >
        {link.label}
      </Link>
    </li>
  );
};

