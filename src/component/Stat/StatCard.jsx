import { GitPullRequestArrow } from "lucide-react";
import React from "react";

export const StatCard = ({ number = 20 , className = '' , icon = <GitPullRequestArrow size={45}/> , text = "عدد طلبات " }) => {
  return (
    <div className={`flex flex-col items-start gap-4 text-white px-6 py-4 rounded-xl ${className ? className :('bg-orange-800 dark:bg-orange-400')}`}>
      <h1 className="text-title-large font-semibold">{text}</h1>
      <div className="flex gap-3 items-center">
        <span className="text-display-large">{number}</span>
        <span>{icon}</span>
      </div>
    </div>
  );
};
