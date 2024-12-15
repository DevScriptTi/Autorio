import React from "react";
import { Logo } from "../Logo";
import { CircleBottom, CircleUpp } from "../Circle";
import { RegisterForm } from "./RegisterContent";

export const Register = () => {
  return (
    <div className="relative flex justify-between items-center xl:h-content xl:overflow-hidden">
      <CircleUpp />
      <CircleBottom />
      <RegisterForm/>
      <Logo/>
    </div>
  );
};
