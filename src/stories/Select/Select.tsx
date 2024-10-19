import React, { ReactElement } from "react";
import classnames from "classnames";
import "../Input/Input.scss";
import MaterialAutocomplete from "./MaterialAutocomplete/MaterialAutocomplete.tsx";
import DefaultSelect from "./DefaultSelect/DefaultSelect.tsx";

interface SelectComponentProps {
  label: string;
  onChange: Function;
  children?: ReactElement | ReactElement[];
  name?: string;
  value: string;
  readOnly?: boolean;
  backgroundDark?: boolean;
  aligned?: boolean;
  extraSmallSize?: boolean;
  smallSize?: boolean;
  mediumSize?: boolean;
  halfwidth?: boolean;
  bold?: boolean;
  first?: boolean;
  iconName?: string;
  autoComplete?: boolean;
  nulign?: string;
  domain?: string;
  population?: string;
  datasection?: string;
  withoutLabel?: boolean;
}

const Select = ({
  children,
  onChange,
  label,
  name,
  value,
  readOnly,
  mediumSize,
  aligned,
  bold,
  first,
  backgroundDark,
  iconName,
  autoComplete,
  nulign,
  domain,
  population,
  datasection,
  withoutLabel
}: SelectComponentProps) => {
  return (
    <div className={classnames("input-container", "full-width", { inline: aligned }, { "half-width": mediumSize }, { "text-bold": bold }, { "": first })}>
      <div>
        {autoComplete ? (
          <MaterialAutocomplete
            domain={domain}
            population={population}
            datasection={datasection}
            nulign={nulign}
            readOnly={readOnly}
            onChange={onChange}
            label={withoutLabel ? undefined : label}
            name={name}
            value={value || ""}
          >
            {children || <React.Fragment />}
          </MaterialAutocomplete>
        ) : (
          <div
            className={classnames(
              "input-fields",
              { "input-fields-default": !readOnly },
              { "input-fields-disabled text-disabled": readOnly },
              { "text-white": backgroundDark && !readOnly },
              { "text-black": !backgroundDark && !readOnly },
              { noArronSelect: iconName }
            )}
          >
            <DefaultSelect readOnly={readOnly} onChange={onChange} label={label} name={name}>
              {children}
            </DefaultSelect>
          </div>
        )}
      </div>
    </div>
  );
};

Select.defaultProps = {
  children: "",
  label: "Select",
  readOnly: false,
  backgroundDark: false,
  aligned: false,
  smallSize: false,
  halfwidth: false,
  bold: false,
  first: false,
  iconName: undefined,
  autoComplete: false,
  withoutLabel: false
};

export default Select;
