import React from "react";
import { RoundedPicture } from "../../../DevScript/pictures/RoundedPicture";
import { NavItemContainer } from "../../../DevScript/NavigationElements/NavItemContainer";
import { ItemText } from "../../../DevScript/NavigationElements/ItemText";
import { NavGroupContainer } from "../../../DevScript/NavigationElements/NavGroupContainer";
import {
  CalendarArrowDown,
  ChartNoAxesGanttIcon,
  Home,
  List,
  LogOut,
  LucideGitPullRequestArrow,
  ShoppingBasket,
  User,
} from "lucide-react";
import { NavMode } from "../../../DevScript/NavigationElements/NavMode";
import {
  NavigationContext,
  useNav,
} from "../../../DevScript/NavigationElements/NavigationContext";
import { ItemIcon } from "../../../DevScript/NavigationElements/ItemIcon";
import { useSelector } from "react-redux";
import { isAdmin, isVendor } from "../../../helpers/Algo/Auth";

export const NavSideBar = () => {
  const user = useSelector((state) => state.user);
  const { shrunk } = useNav();
  document.addEventListener("click", (e) => {
    if (e.target.getAttribute("id") == "navSideBar") {
      document.getElementById("navSideBar").classList.add("max-lg:hidden");
    }
  });
  return (
    <div
      id="navSideBar"
      className={`h-svh  relative z-30 ${
        !shrunk ? "w-sideBar" : "w-fit"
      }  sticky top-header left-0 max-lg:fixed max-lg:w-full inset-y-0 max-lg:bg-black/50 max-lg:z-50   transition-all duration-200 ease-in`}
    >
      <div
        className={`relative  ${
          !shrunk ? "w-sideBar" : "w-fit"
        } h-full flex flex-col  py-4 px-3  bg-light-surface-container-low dark:bg-dark-surface-container-low transition-all duration-200 ease-in`}
      >
        <NavMode />
        <NavItemContainer link={"/dashboard/profile"} bg={false}>
          <RoundedPicture size="size-12" />
          <ItemText
            size="text-title-large"
            text={`${user.user.name} ${user.user.last}`}
            type={user.type}
          />
        </NavItemContainer>
        <NavGroupContainer title="الرئيسية">
          <NavItemContainer link={"/dashboard"}>
            <ItemIcon>{<Home />}</ItemIcon>
            <ItemText text="الصفحة الرئيسية" size="text-title-medium" />
          </NavItemContainer>
          {isAdmin() && (
            <>
              <NavItemContainer link={"/dashboard/vendors"}>
                <ItemIcon>{<User />}</ItemIcon>
                <ItemText text="الباعة" size="text-title-medium" />
              </NavItemContainer>
              <NavItemContainer link={"/dashboard/joinRequests"}>
                <ItemIcon>{<LucideGitPullRequestArrow />}</ItemIcon>
                <ItemText text="طلبات الإنضمام" size="text-title-medium" />
              </NavItemContainer>
              <NavItemContainer link={"/dashboard/refrences"}>
                <ItemIcon>{<List />}</ItemIcon>
                <ItemText text="منتجات مصدرية" size="text-title-medium" />
              </NavItemContainer>
              <NavItemContainer link={"/dashboard/categories"}>
                <ItemIcon>{<ChartNoAxesGanttIcon />}</ItemIcon>
                <ItemText text="اصناف منتجات مصدرية" size="text-title-medium" />
              </NavItemContainer>
            </>
          )}

          {isVendor() && (
            <>
              <NavItemContainer link={"/dashboard/orders"}>
                <ItemIcon>{<CalendarArrowDown />}</ItemIcon>
                <ItemText text="طلبات" size="text-title-medium" />
              </NavItemContainer>
              <NavItemContainer link={"/dashboard/products"}>
                <ItemIcon>{<ShoppingBasket />}</ItemIcon>
                <ItemText text="المنتجات" size="text-title-medium" />
              </NavItemContainer>
            </>
          )}
          <NavItemContainer link={"/"}>
            <ItemIcon>{<LogOut />}</ItemIcon>
            <ItemText text="مغادرة" size="text-title-medium" />
          </NavItemContainer>
        </NavGroupContainer>
      </div>
    </div>
  );
};
