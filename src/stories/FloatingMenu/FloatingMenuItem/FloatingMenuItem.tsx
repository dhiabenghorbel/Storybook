import React, { Fragment, ReactNode } from "react";
import classnames from "classnames";
import uuid from "../../../infrastructure/uuid";
import '../../../app/styles/commons.scss';
import "../floatingMenu.scss";
interface FloatingMenuItemProps {
  whiteText: boolean;
  uppercase: boolean;
  preventClose: boolean;
  specialFunction?: boolean;
  onClick?: Function;
  onClose: Function;
  children: ReactNode;
  noPadding: boolean;
}

const FloatingMenuItem = ({ whiteText, preventClose, onClick, children, onClose, uppercase, specialFunction, noPadding }: FloatingMenuItemProps) => {
  const handleClick = () => {
    if (onClick) onClick();
    if (!preventClose) onClose();
  };

  return (
    <li
      className={classnames(
        "floating-item",
       " floating-item-hover",
        { "flex-row-start": !specialFunction },
        { "flex-row-center": specialFunction },
        { "cursor-pointer": onClick },
        { "floating-item-hover": onClick && !whiteText },
        { "floating-item-hover-black": onClick && whiteText },
        { "text-white": whiteText },
        { uppercase: uppercase },
        { "text-black": !whiteText },
        { "floating-item-special": specialFunction },
        { "no-padding": noPadding }
      )}
      
      key={uuid()}
      onClick={handleClick}
    >
      {children}
      
    </li>
  );
};

FloatingMenuItem.defaultProps = {
  onClick: undefined,
  onClose: () => {},
  whiteText: false,
  preventClose: false,
  children: <Fragment> {"Floating menu item"} </Fragment>,
  uppercase: false,
  specialFunction: false,
  noPadding: false
};

export default FloatingMenuItem;
