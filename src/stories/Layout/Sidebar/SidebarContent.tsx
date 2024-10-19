import React from "react";
import GPListContainer from "../../GPList/GPListContainer.tsx";
import UserCard from "../../UserCard/UserCard/UserCard.tsx";
import LoadingSpinner from "../../Loading/LoadingSpinner.tsx";
import DossierSearch from "../Toolbar/DossierSearch.tsx";
import constants from "../../../GP4You/constants";
import "./Sidebar.scss";

interface SidebarContentProps {
  showLoader : boolean,
  isMobile : boolean,
}

const SidebarContent = ({showLoader , isMobile} : SidebarContentProps) => {
 
  return (
    <React.Fragment>
      {showLoader ? (
        <div className="loading">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="listContainer">
          {isMobile && <UserCard loading={showLoader} />}
          <div className="searchMargins">{constants.isGlobalSubordinateEnabled && isMobile  && <DossierSearch />}</div>
          <div className="sidebarList">
            <GPListContainer />
            <div className="secutiryMargin" />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default SidebarContent;
