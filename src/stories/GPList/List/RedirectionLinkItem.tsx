import React from "react";
import "./GPList.scss";

interface RedirectionLinkItemProps {
  name: string;
  key: string;
  li: object;
  technologieName: string;
  portalAccessUrl: string;
  isActive: boolean;
}

// interface RedirectionUrlProps {
//   "@accessAllowed": boolean;
//   errors: object;
//   status: string;
// }

const RedirectionLinkItem = ({ name, key, li, technologieName, portalAccessUrl, isActive }: RedirectionLinkItemProps) => {

  return (
    <div
      key={key}
      //to={`/${name}`}
      //onClick={() => openHRanalytics(portalAccessUrl)}*/
      className={isActive ? "gp-menu-link gp-menu-list-item gp-menu-list-selected" : "gp-menu-link gp-menu-list-item"}
    >
      {li}
    </div>
  );
};

RedirectionLinkItem.defaultProps = {
  key: "gpListItem",
  name: "GP List Item",
  implemented: true,
  isActive: false
};

export default RedirectionLinkItem;
