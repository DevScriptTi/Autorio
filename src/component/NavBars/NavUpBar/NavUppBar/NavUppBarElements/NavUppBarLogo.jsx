import React from "react";
import { Link } from "react-router-dom";

export const NavUppBarLogo = ({logoPicture , logoName }) => {
  return (
    <Link to="/" className="size-12 flex justify-center">
        <img className="h-full" src={logoPicture} alt={logoName} />
    </Link>
  );
};
