import React, { Fragment } from "react";
import UserContainer from "../Containers/UserContainer.tsx";
import Badges from "../../Badges/Badges.tsx";
import "./Header.scss";

const Header = () => {

  const isMobile = false;
  return (
    <div className="header">
      <div className="header-content">
        <div className="avatar-container">
         {<UserContainer />} 
        </div>
        <div className="menu-container">{!isMobile ? <Badges /> : <Fragment />}</div>
      </div>
    </div>
  );
};

export default Header;
