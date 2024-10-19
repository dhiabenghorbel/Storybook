import React, { Fragment, FunctionComponent, ReactElement } from "react";
import classnames from "classnames";
import "./floatingMenu.scss";
import '../../app/styles/commons.scss';

interface FloatingMenuProps {
  showing?: boolean;
  black?: boolean;
  scroll?: boolean;
  onClose: Function;
  style?: Object;
  children?: any;
  } 

const FloatingMenu: FunctionComponent<FloatingMenuProps> = ({ showing, black, onClose, children, scroll, style }): ReactElement => {
  const childrenWithProps = React.Children.map(children, child => React.cloneElement(child, { ...child.props, onClose }));
  return (
    <React.Fragment >
      <div
        className={classnames("floating-menu", { "floating-menu-black": black }, { "display-block": showing }, { "display-none": !showing }, { "floating-menu-scroll": scroll })}
        style={style}
      >
        <p>{childrenWithProps}</p>
      </div>
      <div className={classnames("transparent-backdrop", { "display-block": showing }, { "display-none": !showing })} onClick={() => onClose()} />
    </React.Fragment>
  );
};

FloatingMenu.defaultProps = {
  showing: true,
  black: false,
  scroll: false,
  children:<Fragment> {"Floating menu"} </Fragment>,
  onClose: () => {},
  style: {}
};

export default FloatingMenu;
