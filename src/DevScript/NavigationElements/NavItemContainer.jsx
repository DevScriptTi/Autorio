import { NavLink } from "react-router-dom";
import { useNav } from "./NavigationContext";

export const NavItemContainer = ({ children, bg = true, link }) => {
  const { shrunk } = useNav();
  return (
    <NavLink
      end="dashboard"
      to={link}
      className={({ isActive }) =>
        `group flex ${shrunk ? "justify-center" : ""} items-center gap-4
       ${
         isActive
           ? `bg-light-primary dark:bg-dark-primary text-light-on-primary dark:text-dark-on-primary  ${
               bg ? "hover:opacity-70" : ""
             }`
           : `text-light-on-surface dark:text-dark-on-surface ${bg ? 'hover:bg-light-surface-container-highest hover:dark:bg-dark-surface-container-highest':''}`
       } rounded-full px-4 py-4 cursor-pointer transition-colors duration-200 ease-linear`
      }
    >
      {children}
    </NavLink>
  );
};
