import React from "react";
import { Head, SubHead } from "../Framwork";
import { FilledButton, IconFilledButton } from "../../Buttons/FilledButton";
import { IconOutlineButton, OutlineButton } from "../../Buttons/OutlineButton";
import { FAB } from "../../Buttons/FAB";

export const Buttons = () => {
  return (
    <div>
      <Head id="Buttons">Buttons</Head>
      <div className="flex gap-4">
        <div>
          <SubHead>FAB</SubHead>
          <FAB />
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <SubHead>Filled Button</SubHead>
            <FilledButton />
          </div>
          <div>
            <SubHead>Icon Filled Button</SubHead>
            <IconFilledButton />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <SubHead>Outline Button</SubHead>
            <OutlineButton />
          </div>
          <div>
            <SubHead>Icon Outline Button</SubHead>
            <IconOutlineButton />
          </div>
        </div>
      </div>
    </div>
  );
};
