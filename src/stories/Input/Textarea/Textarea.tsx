import React, { Fragment } from "react";
import classnames from "classnames";
import "../Input.scss";
import Validation from "../Validation/Validation.tsx";

interface TextAreaProps {
  id?: string;
  readOnly?: boolean;
  required?: boolean;
  value?: string;
  onChange: Function;
  onClick?: Function;
  label?: string;
  backgroundDark?: boolean;
  aligned?: boolean;
  smallSize?: boolean;
  bold?: boolean;
  first?: boolean;
  withoutBorder?: boolean;
  regExp?: string;
  errorCallBack?: () => {};
  max?: string | number;
  min?: string | number;
  validationType?: string;
  type?: string;
  textAreaHeight?: number;
}

const TextArea = ({id, value, readOnly, onChange, required, onClick, label, backgroundDark, aligned, smallSize, bold, first, regExp, max, min, errorCallBack, validationType, type, textAreaHeight }: TextAreaProps) => {
  let height = textAreaHeight ? textAreaHeight : 48;

  if (value) {
    const numberOfLineBreaks = value.split("\n").length > 0 ? value.split("\n").length : 1;

    height = numberOfLineBreaks > 1 ? numberOfLineBreaks * 11 + height : height;
  }

  return (
    <div
      className={classnames(
        "input-container",
        { inline: aligned },
        { "full-width": !smallSize && !aligned },
        { "third-width": smallSize || aligned },
        { "text-bold": bold },
        { "": first }
      )}
      onClick={onClick && !readOnly ? () => onClick() : () => {}}
    >
      <div
        className={classnames(
          "input-fields",
          { "input-fields-default": !readOnly },
          { "input-fields-disabled text-disabled": readOnly },
          { "text-white": backgroundDark && !readOnly },
          { "text-black": !backgroundDark && !readOnly }
        )}
      >
        <textarea
          className={classnames("select-input")}
          style={{ height: `${height}px` }}
          placeholder="  "
          readOnly={readOnly}
          disabled={readOnly}
          rows={10}
          cols={40}
          value={value ? value : undefined}
          //onChange={e => onChange(e)}
          onClick={onClick && !readOnly ? () => onClick() : () => {}}
          id={id}
          required={required}
          autoComplete="off"
        />
        {label ? (
          <label className={classnames("select-label", { "text-disabled": readOnly || !backgroundDark }, { "text-white": backgroundDark })}>
            {/* <FormattedMessage id={label} /> */}
            {label}
          </label>
        ) : (
          <Fragment />
        )}
      </div>
      <Validation
        readOnly={readOnly}
        type={validationType ? validationType : type ? type : "text"}
        value={value}
        required={required}
        regExp={regExp}
        max={max}
        min={min}
        errorCallBack={errorCallBack}
      />
    </div>
  );
};

TextArea.defaultProps = {
  id: undefined,
  readOnly: false,
  required: false,
  onClick: undefined,
  label: undefined,
  backgroundDark: false,
  aligned: false,
  smallSize: false,
  bold: false,
  first: false,
  withoutBorder: false,
  max: undefined,
  min: undefined,
  regExp: undefined,
  errorCallBack: undefined,
  textAreaHeight: 22
};

export default TextArea;
