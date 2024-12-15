import React from "react";
import { NavSideBar } from "../../component/NavBars/NavSideBar/NavSideBar";
import { NavigationContext } from "../NavigationElements/NavigationContext";
import { Menu } from "lucide-react";
import { showNav } from "../../helpers/Dom/NavUpBar";
import { Buttons } from "./Buttons/Buttons";
import { NavUppBarWelocm } from "./NavUppBarWelocm/NavUppBarWelocm";
import { Inputs } from "./FormElements/Inputs";
import { Selects } from "./FormElements/Select";
import { DatePickers } from "./FormElements/DatePickers";
import { Tables } from "./Tables/Tables";

export const Framwork = () => {
  return (
    <div className="flex items-start">
      <Actions />
      <NavigationContext>
        <NavSideBar />
      </NavigationContext>
      <div className="w-full h-[2000px] bg-light-background dark:bg-dark-background px-2 py-4 lg:px-4 lg:py-6 flex flex-col gap-2">
        <NavUppBarWelocm />
        <Buttons />
        <div className="grid grid-cols-resize">
          <Inputs />
          <DatePickers/>
          <Selects />
        </div>
        <Tables/>
      </div>
    </div>
  );
};

export const Head = ({ children, id }) => {
  return (
    <h1
      id={id}
      className="my-3 text-headline-large text-light-on-surface dark:text-dark-on-surface"
    >
      {children}
    </h1>
  );
};
export const SubHead = ({ children, id }) => {
  return (
    <h3
      id={id}
      className="my-3 text-headline-medium text-light-on-surface dark:text-dark-on-surface"
    >
      {children}
    </h3>
  );
};

export const Actions = () => {
  return (
    <div className="fixed bottom-20 end-4 flex flex-col text-light-on-surface dark:text-dark-on-surface">
      <span className="lg:hidden" onClick={showNav}>
        <Menu />
      </span>
    </div>
  );
};
