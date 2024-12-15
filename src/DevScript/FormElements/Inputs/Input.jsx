import React from "react";

export const Input = ({
  label = "label",
  title = "عنوان",
  placeholder = "النص المساعد",
  register = (...params) => {},
  error = null,
}) => {
  return (
    <div className=" flex flex-col items-start gap-4 w-full">
      <label
        className={`relative z flex items-center h-14  rounded-md w-full border-2 ${error ? ("border-light-error dark:border-dark-error") :("border-light-primary dark:border-dark-primary") } px-4 focus:outline-none ring-4 ring-light-surface dark:ring-dark-surface ${error ? ('has-[:focus]:ring-light-error dark:has-[:focus]:ring-dark-error'):('has-[:focus]:ring-light-primary dark:has-[:focus]:ring-dark-primary')} ring-offset-4 ring-offset-light-surface dark:ring-offset-dark-surface `}
        htmlFor={label}
      >
        <span className={`absolute z-0 top-0 px-2 text-lable-large -translate-y-1/2 bg-light-surface-container-low dark:bg-dark-surface-container-low ${error ? ('text-light-error dark:text-dark-error') : ('text-light-on-surface dark:text-dark-on-surface')}`}>{title}</span>
        <input
          className={`w-full bg-transparent placeholder:italic focus:outline-none text-body-large ${error ? ('text-light-error dark:text-dark-error'):(' text-light-on-surface dark:text-dark-on-surface')}`}
          type="text"
          id={label}
          placeholder={placeholder}
          {...register(label)}
        />
      </label>
      {error && (<span className="text-light-error dark:text-dark-error text-body-large">*{error?.message}</span>)}
    </div>
  );
};
