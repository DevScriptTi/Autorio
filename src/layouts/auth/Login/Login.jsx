import React from "react";
import { Logo } from "../Logo";
import { CircleBottom, CircleUpp } from "../Circle";
import { LoginForm } from "./LoginContent";

export const Login = () => {
  return (
    <div className="relative flex justify-between items-center xl:h-content xl:overflow-hidden">
      <CircleUpp />
      <CircleBottom />
      <LoginForm/>
      <Logo/>
    </div>
  );
};
