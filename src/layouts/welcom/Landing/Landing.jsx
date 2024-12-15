import React from "react";
import { Paint } from "./Paint";
import { Definition } from "../../../component/Illustrations-forms/MainForm";

export const Landing = () => {
  return (
    <div className="h-content flex overflow-hidden">
      <Definition/>
      <Paint />
    </div>
  );
};
