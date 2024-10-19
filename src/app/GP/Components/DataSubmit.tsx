/* eslint-disable react/forbid-prop-types */
import React from "react";
import ButtonDefault from "../../../stories/Button/DefaultButton/ButtonDefault.tsx";
//import { throwError } from "../../../services/errorService/errors";

interface DataSubmitProps {
  onSubmit: Function;
  label: string;
  disabled: boolean;
  validate: Function;
}

const DataSubmit = ({ onSubmit, label, disabled, validate }: DataSubmitProps) => {
  const submit = (event: Event) => {
    event.preventDefault();
    if (validate) {
      const isValidated = validate();
      if (isValidated) {
        onSubmit();
      } //else throwError("validation-error");
    } else onSubmit();
  };

  return <ButtonDefault disabled={disabled} onClick={(e: Event) => submit(e)} text={label} />;
};

DataSubmit.defaultProps = {
  disabled: false,
  validate: undefined
};

export default DataSubmit;
