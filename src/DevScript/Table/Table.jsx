import React from "react";

export const Table = ({ children }) => {
  return (
    <div className=" custom-scrollbar overflow-auto w-full">
      <table className="w-full text-light-on-surface dark:text-dark-on-surface">
        {children}
      </table>
    </div>
  );
};

Table.Th = ({ children }) => {
  return (
    <th className="border border-light-outline-variant/70 dark:border-dark-outline-variant/70 px-6 py-3 bg-light-surface-container-high dark:bg-dark-surface-container-high text-body-large">
      {children}
    </th>
  );
};

Table.Td = ({ children }) => {
  return (
    <td className="border border-light-outline-variant/70 dark:border-dark-outline-variant/70 px-6 py-4 bg-light-surface-container-low dark:bg-dark-surface-container-low text-body-medium">
      {children}
    </td>
  );
};
