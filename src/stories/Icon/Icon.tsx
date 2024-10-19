import React, { CSSProperties } from "react";
import classnames from "classnames";
import "./Icon.scss";

interface IconProps {
  id?: string;
  style?: CSSProperties;
  name: string;
  onClick?: Function;
  disabled?: boolean;
  light?: boolean;
  grey?: boolean;
  link?: boolean;
  small?: boolean;
  solid?: boolean;
  regular?: boolean;
}


const Icon = ({ id, style, name, onClick, disabled, light, grey, small, solid, regular, link }: IconProps) => {
  return (
    <div id={id} onClick={e => (disabled ? null : onClick ? onClick(e) : null)}>
    <i
      className={classnames(
        "icon-default",
        { fas: solid && !regular },
        { far: regular },
        `fa-${name}`,
        { "text-white": light && !grey },
        { "text-disabled": grey || disabled },
        { "text-black": !grey && !light && !grey },
        { "text-link cursor-pointer": link },
        { "cursor-pointer": onClick && !disabled },
        { "icon-small": small }
      )}
      style={style}
    />
  </div>
);
};

Icon.defaultProps = {
id: undefined,
name:"home",
style: {backgroundColor : 'rgba(0, 0, 0, 0)'},
onClick: undefined,
disabled: false,
solid: true,
regular: false,
light: false,
grey: false,
link: false,
small: false
};

export default Icon;
