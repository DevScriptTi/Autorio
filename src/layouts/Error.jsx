import React from "react";
import { useNavigate } from "react-router-dom";
import { FilledButton } from "../DevScript/Buttons/FilledButton";

export const Error = () => {
  const navigate = useNavigate()
  return (
    <div className="h-svh flex items-center justify-center ">
      <div className="  p-8  rounded-lg  text-light-on-surface dark:text-dark-on-surface flex flex-col items-center gap-6">
        <p className="text-title-large">حدث خطأ يرجى اعادة المحاولة لاحقا </p>
        <FilledButton
          onClick={() => {
            navigate(-1);
          }}
        >
          العودة
        </FilledButton>
      </div>
    </div>
  );
};
