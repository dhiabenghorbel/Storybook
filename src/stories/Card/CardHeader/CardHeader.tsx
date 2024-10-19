import React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import './cardHeader.scss';

interface CardHeaderProps {
  children: any;
  isSmallCard: boolean;
}

const CardHeader = ({ children, isSmallCard } : CardHeaderProps) => (
  <div 
    className={classnames(
      "card-header",
      {'small-header': isSmallCard},
    )}
  >
    {children}
  </div>
);


CardHeader.propTypes = {
  isSmallCard: PropTypes.bool,
  children: PropTypes.node,
};

CardHeader.defaultProps = {
  isSmallCard: false,
  children: <React.Fragment> {"Card Header"} </React.Fragment>,
};

export default CardHeader;
