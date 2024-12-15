import { ArrowBigDown, BookDown } from "lucide-react";
import React from "react";

export const Select = ({
  children,
  label = "label",
  title = "عنوان",
  placeholder = "النص المساعد",
  register = (...params) => {},
  error = null,
  showError = true,
  showIcon = true,
  className = null
}) => {
  return (
    <div className={` flex flex-col items-start gap-4 ${className ? className : 'w-full'}`}>
      <label
        htmlFor={label}
        className={`relative flex ${showIcon && 'items-center gap-2'} h-14  rounded-md w-full border-2 ${
          error
            ? "border-light-error dark:border-dark-error"
            : "border-light-primary dark:border-dark-primary"
        } px-4 focus:outline-none ring-4 ring-light-surface dark:ring-dark-surface ${
          error
            ? "has-[:focus]:ring-light-error dark:has-[:focus]:ring-dark-error"
            : "has-[:focus]:ring-light-primary dark:has-[:focus]:ring-dark-primary"
        } ring-offset-4 ring-offset-light-surface dark:ring-offset-dark-surface `}
      >
        <span
          className={`absolute top-0 px-2 text-lable-large -translate-y-1/2 bg-light-surface-container-low dark:bg-dark-surface-container-low ${
            error
              ? "text-light-error dark:text-dark-error"
              : "text-light-on-surface dark:text-dark-on-surface"
          }`}
        >
          {title}
        </span>
        <input
          onFocus={() => {
            document
              .getElementById(`${label}-list`)
              .classList.remove("invisible");
          }}
          onBlurCapture={() => {
            setTimeout(() => {
              document.getElementById(label).blur();
              document
                .getElementById(`${label}-list`)
                .classList.add("invisible");
            }, 300);
          }}
          onKeyDown={(event) => {
            event.preventDefault(); // Prevent any key from being typed
          }}
          readOnly
          type="text"
          placeholder={placeholder}
          {...register(`${label}-helper`)}
          id={label}
          className={`w-full bg-transparent placeholder:italic focus:outline-none text-body-large  ${
            error
              ? "text-light-error dark:text-dark-error"
              : " text-light-on-surface dark:text-dark-on-surface"
          }`}
        />
        <ul
          id={`${label}-list`}
          className="invisible custom-scrollbar overflow-y-scroll absolute top-full start-0 z-20 w-full  max-h-28 divide-y divide-light-outline-variant dark:divide-dark-outline-variant  bg-light-surface-container dark:bg-dark-surface-container"
        >
          {children}
        </ul>
        {showIcon && (
          <span
            className={`flex items-center ${
              error
                ? "text-light-error dark:text-dark-error"
                : "text-light-primary dark:text-dark-pritext-light-primary"
            }`}
          >
            <ArrowBigDown />
          </span>
        )}
      </label>
      {(showError && error) && (
        <span className="text-light-error dark:text-dark-error text-body-large">
          *{error?.message}
        </span>
      )}
    </div>
  );
};

Select.Option = ({ option, value, label, setValue = (...params) => {} }) => {
  return (
    <li
      className="block cursor-pointer size-full bg-light-surface-container-high dark:bg-dark-surface-container-high px-4 py-2 text-light-on-surface dark:text-dark-on-surface text-lable-large"
      onClick={() => {
        setValue(`${label}-helper`, option);
        setValue(label, value);
      }}
    >
      {option}
    </li>
  );
};
