import React from "react";
import * as PropTypes from "prop-types";
import classnames from "classnames";
import "../CircularButton.scss";

const CircularBadge = ({ content, displaced, active }) => {
  return (
    <div
      className={classnames(
        "circular-button-badge",
        { "circular-button-badge-displaced": displaced },
        { "circular-button-badge-default-color": active },
        { "circular-button-badge-disabled-color": !active }
      )}
    >
      {content}
    </div>
  );
};

CircularBadge.propTypes = {
  content: PropTypes.any.isRequired,
  displaced: PropTypes.bool,
  active: PropTypes.bool
};

CircularBadge.defaultProps = {
  displaced: false,
  active: true
};

export default CircularBadge;
