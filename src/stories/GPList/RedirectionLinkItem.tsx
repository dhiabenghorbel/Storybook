import React from "react";
import * as PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./List/";
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
    <Link
      key={key}
      to={`/${name}`}
      //onClick={() => openHRanalytics(portalAccessUrl)}
      className={isActive ? "gp-menu-link gp-menu-list-item gp-menu-list-selected" : "gp-menu-link gp-menu-list-item"}
    >
      {li}
    </Link>
  );
};

RedirectionLinkItem.propTypes = {
  key: PropTypes.string,
  name: PropTypes.string,
  implemented: PropTypes.bool,
  isActive: PropTypes.bool
};

RedirectionLinkItem.defaultProps = {
  key: "gpListItem",
  name: "GP List Item",
  implemented: true,
  isActive: false
};

export default RedirectionLinkItem;
