import React, { Fragment } from "react";
//import { FormattedMessage } from "react-intl";
import { OptionProps } from "../../../app/models/ISelectOptions";

const Option = ({ value, label, key, avoidTranslation, hideOption }: OptionProps) =>
  !hideOption ? (
    avoidTranslation ? (
      <option value={value} key={key}>
        {value}
      </option>
    ) : (
     /* <FormattedMessage id={label} defaultMessage={label}>
        {message => (
          <option value={value} key={key}>
            {message}
          </option>
        )}
      </FormattedMessage>*/
      
        <option value={value} key={key}>
          {label}
        </option>
    )
 ):(
    <Fragment />
  );

export default Option;
