import React from "react";
import { Link } from "react-router-dom";
import { Item } from "./Item";

export const PaginationFetch = () => {
  return (
    <div className="w-full animate-pulse">
      <ul className="mx-auto max-w-full flex justify-center gap-4 hidden-scrollbar overflow-auto ">
        <li>
          <Link
            className={`block border-2 border-light-surface-container-highest dark:border-dark-surface-container-highest size-8 text-title-large text-center rounded-md`}
          ></Link>
        </li>
        <li>
          <Link
            className={`block border-2 border-light-surface-container-highest dark:border-dark-surface-container-highest size-8 text-title-large text-center rounded-md`}
          ></Link>
        </li>
        <li>
          <Link
            className={`block border-2 border-light-surface-container-highest dark:border-dark-surface-container-highest size-8 text-title-large text-center rounded-md`}
          ></Link>
        </li>
        <li>
          <Link
            className={`block border-2 border-light-surface-container-highest dark:border-dark-surface-container-highest size-8 text-title-large text-center rounded-md`}
          ></Link>
        </li>
      </ul>
    </div>
  );
};
