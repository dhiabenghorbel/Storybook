import React from "react";
import Tasks from "../../Badges/Tasks/Tasks.tsx";
import Notifications from "../../Badges/Notifications/Notifications.tsx";
import Requests from "../../Badges/Requests/Requests.tsx";
import Documents from "../../Badges/Documents/Documents.tsx";
import Reports from "../../Badges/Reports/Reports.tsx";
import * as constants from "../../../GP4You/constants";
import "./Footer.scss";

interface FooterProps {
    isMobile : boolean
}

const Footer = ({isMobile} : FooterProps) => {


  if (isMobile) {
    return (
      <div className="footer-container">
        <Tasks />
        <Notifications />
        <Requests />
        <Documents />
        {constants.isReportsEnabled && <Reports />}
      </div>
    );
  }
  return <React.Fragment />;
};

Footer.defaultProps = {
  isMobile : true
}


export default Footer;
