import React from "react";

export const SpeedSearch = () => {
  return (
    <label
      className=" flex m-auto items-center px-6 h-16 bg-transparent rounded-full w-9/12  md:w-[44.37rem]  border border-light-outline-variant dark:border-dark-outline-variant   has-[:focus]:ring-4 has-[:focus]:ring-offset-4 has-[:focus]:ring-light-primary has-[:focus]:dark:ring-dark-primary  "
      htmlFor="inputSearch"
    >
      <input className="bg-transparent focus:outline-none text-title-large text-light-on-surface dark:text-dark-on-surface placeholder:text-light-on-surface-variant/70 dark:placeholder:text-dark-on-surface-variant/70 placeholder:italic " placeholder="إبحث عن قطعة غيار" id="inputSearch" type="text" />
    </label>
  );
};
