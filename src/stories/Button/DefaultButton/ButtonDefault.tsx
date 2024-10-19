import React, { Fragment, FunctionComponent, ReactElement, ReactNode } from "react";
import classnames from "classnames";
import "../Button.scss";
import LoadingSpinner from "../../Loading/LoadingSpinner.tsx";
import Icon from "../../Icon/Icon.tsx";

interface ButtonProps {
  text?: string;
  bubble?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  style?: Object;
  icon?: string;
  image?: string;
  success?: boolean;
  danger?: boolean;
  info?: boolean;
  isMenu?: boolean;
  dropdown?: boolean;
  register?: boolean;
  smallWidth?: boolean;
  notTranslated?: boolean;
}

const ButtonDefault: FunctionComponent<ButtonProps> = ({
  text,
  bubble,
  fullWidth,
  loading,
  disabled,
  onClick,
  style,
  icon,
  image,
  success,
  danger,
  info,
  isMenu,
  dropdown,
  register,
  smallWidth,
  notTranslated
}): ReactElement => {
  const space = String.fromCharCode(160);
  return (
    <button
      className={classnames(
        { "button-success": success && !disabled },
        { "button-danger": danger && !disabled },
        { "button-info": info && !disabled },
        "flex-row-center",
        "standard-button",
        "padding-button",
        { "full-width": fullWidth && !smallWidth },
        { "default-button-width": !fullWidth && !dropdown && !smallWidth },
        { "small-button-width": !fullWidth && !dropdown && smallWidth },
        { "big-button-width": icon && text && dropdown && !smallWidth },
        { "standard-button-disabled": disabled },
        { "standard-button-loading": loading },
        { "standard-button-menu": isMenu },
        { "register-button": register }
      )}
      style={style}
      disabled={disabled}
      onClick={!loading && !disabled ? onClick : null}
    >
      {loading ? (
        <LoadingSpinner type="button" />
      ) : (
        <Fragment>
          {icon && <Icon name={icon} light />}
          {image && <img src={image} style={{ width: "35px", height: "35px", borderRadius: "50%", margin: "0 15px 0 0" }} alt="" />}
          {bubble && <div className="circular-button-badge">{bubble}</div>}
          {bubble && icon && `${space}${space}`}
          {text && icon && `${space}${space}`}
          {/* {text && !notTranslated && <FormattedMessage id={text} />} */}
          {text && notTranslated && text}
          {dropdown && text && `${space}${space}`}
          {dropdown && <i className="fas fa-sort-down" />}
        </Fragment>
      )}
    </button>
  );
};

ButtonDefault.defaultProps = {
  text: "",
  bubble: undefined,
  disabled: false,
  loading: false,
  fullWidth: false,
  onClick: () => {},
  style: {},
  icon: undefined,
  success: false,
  danger: false,
  info: false,
  isMenu: false,
  dropdown: false,
  register: false,
  smallWidth: false,
  notTranslated: true
};

export default ButtonDefault;
