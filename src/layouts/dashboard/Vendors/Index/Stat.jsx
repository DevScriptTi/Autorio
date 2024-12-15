import React from "react";
import {  GitPullRequestArrow } from "lucide-react";
import { StatCard } from "../../../../component/Stat/StatCard";

export const Stat = ({number = 20 , text ="عدد طلبات" , icon = <GitPullRequestArrow size={45}/>  }) => {
  return <div className="flex gap-4">
    <StatCard number={number} className="bg-green-700 dark:bg-green-400" text={text} icon={icon} />
  </div>;
};
