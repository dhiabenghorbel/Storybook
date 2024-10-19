import React, { FunctionComponent, ReactElement } from "react";
import * as moment from "moment";
interface MonthOptionsProps {
  inclusiveCounting?: boolean;
  oneDigitFormat?: boolean;
}

const MonthOptions: FunctionComponent<MonthOptionsProps> = ({ inclusiveCounting, oneDigitFormat }): ReactElement => {
  const formatToTwoDigits = (value: number) => {
    let formattedNumber: string;
    let numberToFormat: string = value.toString();
    inclusiveCounting ? (numberToFormat = (value + 1).toString()) : (numberToFormat = value.toString());
    numberToFormat.length < 2 ? (formattedNumber = `0${numberToFormat}`) : (formattedNumber = numberToFormat);
    return oneDigitFormat ? value : formattedNumber;
  };

  return (
    <React.Fragment>
      {moment.months().map((label, value) => {
        return <option value={formatToTwoDigits(value)}>{label}</option>;
      })}
    </React.Fragment>
  );
};

MonthOptions.defaultProps = {
  inclusiveCounting: false,
  oneDigitFormat: false
};

export default MonthOptions;
