import React, { useState, Fragment, FunctionComponent, ReactElement } from "react";
import classnames from "classnames";
import Icon from "../../Icon/Icon.tsx";
import Validation from "../Validation/Validation.tsx";
import "../Input.scss";
import avatar from "../../../media/user.png";
import "../../../app/styles/commons.scss";

interface TextFieldProps {
  id?: string;
  readOnly?: boolean;
  required?: boolean;
  type: "text" | "email" | "password" | "number" | "date" | "time" | "range" | string;
  value?: string;
  onChange?: Function;
  onBlur?: Function;
  onClick?: Function;
  step?: string | number | undefined;
  min?: string | number | undefined;
  max?: string | number | undefined;
  label?: string;
  regExp?: string;
  icon?: string;
  backgroundDark?: boolean;
  spaced?: boolean;
  MaxContent?: boolean;
  aligned?: boolean;
  smallSize?: boolean;
  mediumSize?: boolean;
  marginLeft?: boolean;
  bigMarginRight?: boolean;
  extraSmallSize?: boolean;
  unitSize?: boolean;
  bigSize?: boolean;
  bold?: boolean;
  first?: boolean;
  errorCallBack?: Function;
  withoutBorder?: boolean;
  toolbar?: boolean;
  dossierFormat?: boolean;
  color?: string;
  validationType?: string;
}

const TextField: FunctionComponent<TextFieldProps> = ({
  id,
  type,
  value,
  icon,
  readOnly,
  onChange,
  onBlur,
  step,
  max,
  min,
  required,
  regExp,
  onClick,
  label,
  backgroundDark,
  spaced,
  MaxContent,
  aligned,
  smallSize,
  mediumSize,
  marginLeft,
  bigMarginRight,
  extraSmallSize,
  unitSize,
  bigSize,
  bold,
  first,
  errorCallBack,
  withoutBorder,
  toolbar,
  dossierFormat,
  color,
  validationType
}): ReactElement => {

  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div
      className={classnames(
        "input-container",
        { "inline-grid": aligned },
        { "full-width": !smallSize && !aligned },
        { "doble-third-width": bigSize },
        { "half-width": mediumSize },
        { "third-width": smallSize || (aligned && !mediumSize) },
        { "fourth-width": extraSmallSize },
        { "unit-size-width": unitSize },
        { "text-bold": bold },
        { "": first },
        { "margin-left": marginLeft },
        { "big-margin-right": bigMarginRight },
        { "dossier-selected": dossierFormat }
      )}
      onClick={(onClick && !readOnly) || (dossierFormat && onClick) ? () => onClick() : () => {}}
    >
      {dossierFormat && (
        <div>
          <img className="imgCircle dossier-selected-avatar" src={avatar} alt="Avatar" />
        </div>
      )}
      <div
        className={classnames(
          "input-fields",
          { "input-fields-default": !readOnly && !color },
          { "input-fields-disabled": readOnly && !color },
          { "text-disabled": readOnly && !onClick && !color },
          { "text-white": backgroundDark && !readOnly && !color },
          { "Max-Content-label": MaxContent },
          { "text-black": !backgroundDark && !readOnly && !color },
          { "input-without-border": withoutBorder },
          { "text-disabled-without-cursor": readOnly && onClick }
        )}
        style={{ color, borderBottom: `1px solid ${color}` }}
      >
        <input
          className={classnames("text-input", { "cursor-pointer": onClick && value !== undefined && value !== "" }, { "toolbar-size": toolbar })}
          placeholder="  "
          readOnly={readOnly}
          disabled={readOnly}
          type={type}
          value={value || text}
          onChange={e => handleChange(e)}
          onBlur={onBlur ? e => onBlur(e) : undefined}
          id={id}
          step={step}
          max={max}
          min={min}
          required={required}
          autoComplete="off"
        />
        {label ? (
          <label
            className={classnames(
              "input-label",
              { "text-disabled": (readOnly || !backgroundDark || dossierFormat) && !color },
              { "text-white": backgroundDark && !color },
              { "spaced-label": spaced }
            )}
            htmlFor={id}
            style={{ color }}
          >
            {label}
          </label>
        ) : (
          <Fragment />
        )}
        {icon ? <Icon name={icon} disabled onClick={onClick} light={backgroundDark} /> : <Fragment />}
      </div>
      <Validation readOnly={readOnly} type={validationType || type} value={value} required={required} regExp={regExp} max={max} min={min} errorCallBack={errorCallBack} />
    </div>
  );
};

TextField.defaultProps = {
  id: undefined,
  readOnly: false,
  required: false,
  onClick: undefined,
  onBlur: undefined,
  step: undefined,
  min: undefined,
  max: undefined,
  label: undefined,
  regExp: undefined,
  icon: undefined,
  backgroundDark: false,
  spaced: false,
  MaxContent: false,
  aligned: false,
  smallSize: false,
  mediumSize: false,
  marginLeft: false,
  bigMarginRight: false,
  extraSmallSize: false,
  unitSize: false,
  bigSize: false,
  bold: false,
  first: false,
  errorCallBack: undefined,
  // errorMessage: undefined,
  // forceError: false,
  withoutBorder: false,
  type: "text",
  color : "gray"
};

export default TextField;
