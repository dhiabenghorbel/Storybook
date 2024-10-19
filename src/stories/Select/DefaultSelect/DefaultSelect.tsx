import React, { Fragment, ReactElement } from "react";
//import { FormattedMessage } from "react-intl";
import classnames from "classnames";
import "../../Input/Input.scss";
import "../../colors.scss";
import Icon from "../../Icon/Icon.tsx";

interface SelectDefaultComponentProps {
  label: string;
  onChange: Function;
  children: ReactElement | ReactElement[];
  name?: string;
  value: string;
  readOnly?: boolean;
  backgroundDark?: boolean;
  iconName?: string;
  withoutLabel?: boolean;
}

const DefaultSelect = ({ children, onChange, label, name, value, readOnly, backgroundDark, iconName, withoutLabel }: SelectDefaultComponentProps) => {

  const options : object = [ {value : 1 ,label :"option 1"},{value : 2 ,label :"option 2"},{value : 3 ,label :"option 3"}];
  return (
    <Fragment>
      <select
        className={classnames("select-input", { noArronSelect: iconName || readOnly })}
        disabled={readOnly}
        name={name}
        onChange={e => onChange(e.target.value)}
        required
        value={value}
      >
        {children ? children : <Fragment>
          (<option></option>
          {options.map((option, index) => {
            return <option key={index} >{option.label}</option>
          })}
        )  
        </Fragment>
}
      </select>
         
      {label && label !== "" && !withoutLabel && (
        <label className={classnames("select-label", { "text-disabled": readOnly || !backgroundDark }, { "text-white": backgroundDark })}>
          {label}
        </label>
      )}
      {iconName && <Icon name={iconName} disabled light={backgroundDark} />}
    </Fragment>
  );
};

DefaultSelect.defaultProps = {
  children: "",
  label: "Select",
  readOnly: false,
  options : [],
  backgroundDark: false,
  iconName: undefined
};

export default DefaultSelect;
