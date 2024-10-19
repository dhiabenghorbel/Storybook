import React from "react";
import * as PropTypes from "prop-types";
import classnames from "classnames";
import "./CircularButton.scss";
import CircularBadge from "./CircularBadge/CircularBadge.tsx";
import Icon from "../../Icon/Icon.tsx";

const CircularButton = ({ icon, content }) => {
  return (
    <div className={classnames({ "circular-button": icon !== undefined })}>
      {icon && <Icon name={icon} style={{ color: "inherit", fontSize: "inherit" }} />}
      {content && <CircularBadge content={content} displaced={icon !== undefined} />}
    </div>
  );
};

CircularButton.propTypes = {
  icon: PropTypes.node,
  content: PropTypes.node
};

CircularButton.defaultProps = {
  icon: undefined,
  content: false
};

export default CircularButton;
