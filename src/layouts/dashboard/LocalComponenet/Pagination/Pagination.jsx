import React from "react";
import { Link } from "react-router-dom";
import { Item } from "./Item";

export const Pagination = ({
  links = [{ url: "", label: "", active: "" }],
  to = ''
//   setShowContent  = ()=>{}
}) => {
  return (
    <div className="w-full">
      <ul className="mx-auto max-w-full flex justify-center gap-4 hidden-scrollbar overflow-auto ">
        {links.map(item=>(
            <Item key={item.label} link={item} to={to}/>
        ))}
      </ul>
    </div>
  );
};
