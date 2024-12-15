import React from "react";
import { Link } from "react-router-dom";

export const JoinUs = () => {
  return <Link to={'/JoinUs'} className="h-12 bg-gradient-to-r from-light-primary to-light-secondary px-4 rounded-full flex items-center text-light-on-primary dark:text-dark-on-surface  text-title-medium">انضم إلينا</Link>;
};
