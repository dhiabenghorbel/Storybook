import React from "react";
import constants from "../../../GP4You/constants";
import LogoutButton from "../../Button/LogoutButton/LogoutButton.tsx";
import Home from "../../Button/HomeButton/Home.tsx";
import Delegation from "../../Button/DelegationButton/Delegation.tsx";
import RoleList from "../../RoleList/RoleList.tsx";
import HamburgerButton from "../../Button/HamburgerButton/HamburgerButton.tsx";
import SwitchLanguage from "../../Button/SwitchLanguage/SwitchLanguage.tsx";
import "./headerToolbar.scss";

interface HeaderToolbarProps {
  isManagerRole : boolean;
  isMobile : boolean;
  isSidebarEnabled : boolean;
}

const HeaderToolbar = ({isManagerRole , isMobile ,isSidebarEnabled}: HeaderToolbarProps) => {

  return (
    <div className="header-toolbar">
      <div className="header-toolbar-content">
        <div className="flex-row-space-between">
          {isSidebarEnabled && <HamburgerButton light />}
          <Home light/>
          <div className="role-list">
            <RoleList />
          </div>
        </div>
        <div className="flex-row-space-between">
          {/* {constants.isGlobalSubordinateEnabled && isManagerRole && !isMobile && <DossierSearch />} */}
          {constants.isDelegationEnabled && isManagerRole && <Delegation light/>}
          {constants.isLanguageSelectorEnabled && <SwitchLanguage light/>}
          <LogoutButton light/>
        </div>
      </div>
    </div>
  );
};

export default HeaderToolbar;
