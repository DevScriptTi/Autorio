import React from "react";
import { DashboardNavUpBarContext } from "./DashboardNavUpBarContext";
import { NavUppBarContainer } from "../NavUppBar/NavUppBarElements/NavUppBarContainer";
import { NavUppBarMode } from "../NavUppBar/NavUppBarElements/NavUppBarMode";
import { NavUppBarLogo } from "../NavUppBar/NavUppBarElements/NavUppBarLogo";
import { showNav } from "../../../../helpers/Dom/NavUpBar";
import { Menu } from "lucide-react";

export const DashboardNavUpBar = () => {
  return (
    <DashboardNavUpBarContext>
      <div className="h-header sticky top-0 inset-x-0">
        <NavUppBarContainer color={true}>
          <span className="lg:hidden text-light-on-surface dark:text-dark-on-surface" onClick={showNav}>
            <Menu />
          </span>
          <NavUppBarLogo
            logoPicture={"/public/logo.png"}
            logoName={"Autorio-Logo"}
          />
          <NavUppBarMode />
        </NavUppBarContainer>
      </div>
    </DashboardNavUpBarContext>
  );
};
