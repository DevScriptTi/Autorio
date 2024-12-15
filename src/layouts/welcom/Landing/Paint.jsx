import React from "react";

export const Paint = () => {
  return (
    <>
      <div className="hidden h-full xl:block flex-1 bg-light-primary dark:bg-dark-primary -skew-x-12 relative start-24 ">
        <div className="w-[56rem] h-[50.68rem] rounded-full absolute top-11 end-40 bg-white/25 dark:bg-black/25 blur-3xl "></div>
        <div className="hidden xl:block w-[50rem] absolute top-11 end-40">
          <img className="h-full " src="/public/welcom.png" alt="" />
        </div>
      </div>
    </>
  );
};
