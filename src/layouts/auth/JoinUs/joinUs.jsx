import React from "react";
import { JoinForm } from "./JoinContent";
import { Logo } from "../Logo";
import { CircleBottom, CircleUpp } from "../Circle";

export const JoinUs = () => {
  return (
    <div className="relative flex justify-between items-center xl:h-content xl:overflow-hidden">
      <CircleUpp />
      <CircleBottom />
      <JoinForm/>
      <Logo/>
    </div>
  );
};
