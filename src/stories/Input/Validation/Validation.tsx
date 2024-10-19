import React, { Fragment, FunctionComponent, ReactElement } from "react";

import {
  checkError,
  defaultValidation,
  isValidateNIE,
  isValidCc,
  isValidESPAFI,
  isValidIban,
  isValidateDNI,
  isValidSeguridadSocial,
  isValidSSNumber,
  isValidTelephoneNumber,
  isValidTextAreaLength,
  isValidNifNie
} from "../../../app/validators/fieldValidator.ts";

interface ValidationProps {
  type: string;
  value: any;
  required?: boolean;
  max?: string | number | undefined;
  min?: string | number | undefined;
  regExp?: string;
  errorCallBack?: Function;
  readOnly?: boolean;
}

export const validate = (value: string, type: string, required?: boolean, min?: string | number, max?: string | number, regExp?: string, readOnly?: boolean): any => {
  let currentOnError: boolean = false;
  let currentMessage: string = "Unexpected error";

  if (type === "dni") {
    const { onError, message } = isValidateDNI(value, required);
    currentOnError = onError;
    currentMessage = message;
  } else if (type === "nifnie") {
    const { onError, message } = isValidNifNie(value, required);
    currentOnError = onError;
    currentMessage = message;
  } else if (type === "nie") {
    const { onError, message } = isValidateNIE(value, required);
    currentOnError = onError;
    currentMessage = message;
  } else if (type === "iban") {
    const { onError, message } = isValidIban(value, required);
    currentOnError = onError;
    currentMessage = message;
  } else if (type === "ssnumber") {
    const { onError, message } = isValidSSNumber(value, required);
    currentOnError = onError;
    currentMessage = message;
  } else if (type === "ccpt") {
    const { onError, message } = isValidCc(value, required);
    currentOnError = onError;
    currentMessage = message;
  } else if (type === "sspt") {
    const { onError, message } = isValidSeguridadSocial(value, required);
    currentOnError = onError;
    currentMessage = message;
  } else if (type === "textarea-") {
    const length = type.substr(9);
    const { onError, message } = isValidTextAreaLength(value, required, length);
    currentOnError = onError;
    currentMessage = message;
  } else if (type === "telephone-") {
    const length = type.substr(10);
    const { onError, message } = isValidTelephoneNumber(value, required, length);
    currentOnError = onError;
    currentMessage = message;
  } else if (type === "ESPAFI") {
    const { onError, message } = isValidESPAFI(value, required);
    currentOnError = onError;
    currentMessage = message;
  } else {
    currentOnError = !defaultValidation(value, required);
    currentMessage = "Field is required";
  }
  return { currentOnError, currentMessage };
};

const Validation: FunctionComponent<ValidationProps> = ({ type, value, required, min, max, regExp, readOnly }): ReactElement => {
  const { onError, message } = checkError(type, value, required, min, max, regExp, readOnly, type);
  
  if (onError && !readOnly) {
    return (
      <p className="input-error">
        {/* <FormattedMessage id={message} /> */}
        {message}
      </p>
    );
  }
  return <Fragment />;
};

Validation.defaultProps = {
  required: false,
  max: undefined,
  min: undefined,
  regExp: undefined,
  errorCallBack: undefined
};

export default Validation;
