import React, { Fragment } from "react";
import Validation from "../Validation/Validation.tsx";
import Checkbox from "../../DataItems/Boolean/Checkbox.tsx";

interface CheckboxRadioInputProps {
  id?: string;
  readOnly?: boolean;
  required?: boolean;
  type: "checkbox" | "radio";
  value: string;
  onChange?: Function;
  label?: string;
  regExp?: string;
  validation?: Function;
  errorMessage?: string;
  or: string[];
  checked: boolean;
}

const CheckboxRadioInput = ({ id, type, value, readOnly, onChange, or, label, required, errorMessage, regExp, validation, checked }: CheckboxRadioInputProps) => {
  return (
    <div className="input-container">
      <Checkbox checked={checked} id={id} onChange={onChange} readOnly={readOnly} type={type} />
      {/* {label ? <FormattedMessage id={label} /> : <Fragment />} */}
      {label ? label : <Fragment />}
      <Validation readOnly={readOnly} type={type} required={required} value={value} regExp={regExp} />
    </div>
  );
};

CheckboxRadioInput.defaultProps = {
  label: undefined,
  required: false,
  regExp: undefined,
  validation: undefined,
  errorMessage: undefined,
  or: ["", "X"],
  checked: false
};

export default CheckboxRadioInput;
