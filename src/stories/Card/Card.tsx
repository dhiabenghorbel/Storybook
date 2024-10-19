import React from 'react';
import classnames from 'classnames';
import './card.scss';
import '../../app/styles/commons.scss';

interface CardProps {
  fullWidth: boolean;
  fullHeight: boolean;
  fitContent: boolean;
  loginCard: boolean;
  contentCard: boolean;
  children: any;
  isSmallCard: boolean;
  alignHeader: boolean;
  dmsCard: boolean;
}

const Card = ({ fullWidth, fullHeight, fitContent, loginCard, contentCard, children, isSmallCard, alignHeader, dmsCard }: CardProps) => (
  <div
    className={classnames(
      "card-main",
      { 'full-width': fullWidth },
      { 'full-height': fullHeight },
      { 'fit-content-height': fitContent },
      { 'login-card': loginCard },
      { 'content-card': contentCard },
      {'small-card': !isSmallCard},
      {'flex-row-start': alignHeader},
      {'document-card': dmsCard}
    )}
  >
    {children}
  </div>
);

Card.defaultProps = {
  fullWidth: true,
  fullHeight: true,
  fitContent: true,
  loginCard: true,
  contentCard: true,
  isSmallCard: false,
  children: <React.Fragment> {'Card content'} </React.Fragment>,
  alignHeader: false,
  dmsCard: false
};

export default Card;
