import { Plus } from "lucide-react";
import React from "react";

export const StatisticCard = ({
  title = "عنوان عنوان",
  number = 45,
  className = "bg-orange-700 dark:bg-orange-400",
  icon = <Plus size={56}/>
}) => {
  return (
    <div
      className={` flex flex-col  gap-4 size-fit px-6 py-4 rounded-xl  ${className}`}
    >
      <h3 className="text-title-large">{title}</h3>
      <div className="flex gap-2 items-center ">
        <span className="text-display-large">{number}</span>
        <span className="text-headline-large">{icon}</span>
      </div>
    </div>
  );
};
