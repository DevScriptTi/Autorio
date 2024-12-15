import React from "react";
import { NavUppBarContext } from "./NavUppBarContext";
import { NavUppBarContainer } from "./NavUppBarElements/NavUppBarContainer";
import { NavUppBarLogo } from "./NavUppBarElements/NavUppBarLogo";
import { NavUppBarMiddleNav } from "./NavUppBarElements/NavUppBarMiddleNav";
import { NavUppBarMiddleLink } from "./NavUppBarElements/NavUppBarMiddleLink";
import { NavUppBarLastNav } from "./NavUppBarElements/NavUppBarLastNav";
import { NavUppBarLastLink } from "./NavUppBarElements/NavUppBarLastLink";
import { NavUppBarLastBotton } from "./NavUppBarElements/NavUppBarLastBotton";
import { Menu } from "lucide-react";
import { NavUppBarMode } from "./NavUppBarElements/NavUppBarMode";
import { toggleHidden } from "../../../../helpers/Dom/ShowNav";
import { AuthMiddlewareItem } from "../../../../layouts/AuthMiddleware";
import { isAuth } from "../../../../helpers/Algo/Auth";
import { Logout } from "../../../../layouts/auth/Logout/Logout";
import { useSelector } from "react-redux";

export const NavUppBar = ({ children }) => {
  const user = useSelector(state=>state.user)
  return (
    <NavUppBarContext>
      <div className="h-header sticky inset-x-0 z-30">
        <NavUppBarContainer>
          <NavUppBarLogo logoPicture={"/logo.png"} logoName={"Autorio-Logo"} />
          <NavUppBarMode />
          <NavUppBarMiddleNav>
            <NavUppBarMiddleLink href={"/#"}>
              الصفحة الرئيسية
            </NavUppBarMiddleLink>
            <AuthMiddlewareItem>
              <NavUppBarMiddleLink href={"/dashboard"} type="non-dynamice">
                لوحة التحكم
              </NavUppBarMiddleLink>
            </AuthMiddlewareItem>
            <NavUppBarMiddleLink href={"/#services"}>خدمات</NavUppBarMiddleLink>
            <NavUppBarMiddleLink href={"/#contact"}>اتصال</NavUppBarMiddleLink>
            <NavUppBarMiddleLink href={"/#about"}>عنا</NavUppBarMiddleLink>
          </NavUppBarMiddleNav>
          <NavUppBarLastNav>
            {isAuth() ? (
              <>
                <NavUppBarLastLink link={"/profile"}>
                  {user.user?.name}  {user.user?.last} 
                </NavUppBarLastLink>
                <Logout>
                  تسجيل الخروج
                </Logout>
              </>
            ) : (
              <>
                <NavUppBarLastLink link={"/Register"}>
                  انشاء حساب
                </NavUppBarLastLink>
                <NavUppBarLastBotton link={"/Login"}>
                  تسجيل الدخول
                </NavUppBarLastBotton>
              </>
            )}
          </NavUppBarLastNav>
          <ToggelMenu />
        </NavUppBarContainer>
      </div>
    </NavUppBarContext>
  );
};

const ToggelMenu = () => {
  return (
    <div
      onClick={() => {
        toggleHidden("nav");
      }}
      className="ms-2 *:size-8 lg:hidden  text-light-on-surface dark:text-dark-on-surface "
    >
      <Menu />
    </div>
  );
};
