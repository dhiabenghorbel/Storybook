import React from "react";
import * as PropTypes from "prop-types";
import classnames from "classnames";
import "./cardBody.scss";

interface CardBodyProps {
  overflowCard: boolean;
  noPadding: boolean;
  fillWidth: boolean;
  isSmallCard: boolean;
  children: any;
}

const CardBody = ({ fillWidth, overflowCard, children, noPadding, isSmallCard }: CardBodyProps) => (
  <div
    className={classnames(
      "card-body",
      { "overflow-card": overflowCard },
      { "card-body-full-width": fillWidth },
      { "no-padding-card-body": noPadding },
      { "small-card": isSmallCard }
    )}
  >
    {children}
  </div>
);

CardBody.propTypes = {
  overflowCard: PropTypes.bool,
  noPadding: PropTypes.bool,
  fillWidth: PropTypes.bool,
  children: PropTypes.node
};

CardBody.defaultProps = {
  overflowCard: false,
  fillWidth: false,
  noPadding: false,
  isSmallCard: false,
  children: <React.Fragment> {'Card body'} </React.Fragment>
};

export default CardBody;
