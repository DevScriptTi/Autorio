import React from "react";
import { DefinitionLogo } from "./Definition/DefinitionLogo";
import { DefinitionTitle } from "./Definition/DefinitionTitle";
import { DefinitionDescription } from "./Definition/DefinitionDescription";
import { JoinUs } from "./Definition/JoinUs";
import { Contact } from "./Definition/Contact";

export const MainForm = () => {
  return (
    <div className="flex gap-2 h-content">
      <Definition />
      <Paint />
    </div>
  );
};

export const Definition = () => {
  return (
    <div className="w-1/3 px-7 max-xl:w-full flex flex-col gap-8  items-center my-auto">
      <div className="flex flex-col gap-4  items-center">
        <DefinitionLogo/>
        <DefinitionTitle/>
        <DefinitionDescription/>
      </div>
      <div className="flex flex-col gap-4  items-center">
        <JoinUs/>
        <Contact/>
      </div>
    </div>
  );
};

const Paint = () => {
  return (
    <div className="relative flex-1 overflow-hidden max-xl:hidden flex justify-end">
      <div className="absolute top-0 -end-1/3 object-contain">
        <img className="h-[1521px]" src="/public/assets/form.png" alt="MainForm" />
      </div>
      <div className="absolute top-0 left-[17px] object-contain w-[600px]">
        <img src="/public/assets/map.png" alt="MainForm" />
      </div>
      <div className="absolute top-0 left-[430px] object-contain w-[570px]">
        <img src="/public/assets/shipping-person.png" alt="MainForm" />
      </div>
    </div>
  );
};
