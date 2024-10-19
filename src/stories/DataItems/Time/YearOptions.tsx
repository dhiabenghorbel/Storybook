import React, { FunctionComponent, ReactElement } from "react";
import Option from "../../Select/Option/Option.tsx";  
import { allYearOptions } from "../../../infrastructure/processing/general/time.ts";

interface YearOptionsProps {
  numberValues?: boolean;
  lowerMargin?: number;
  upperMargin?: number;
}

const YearOptions: FunctionComponent<YearOptionsProps> = ({ numberValues, lowerMargin, upperMargin }): ReactElement => {
  const year = new Date().getFullYear();
  if (numberValues && lowerMargin && upperMargin) {
    const result: ReactElement[] = [];
    for (let index = year - lowerMargin; index < year + upperMargin; index++) {
      result.push(
        <option value={index} key={index}>
          {index}
        </option>
      );
    }
    return <React.Fragment>{result}</React.Fragment>;
  }

  const yearOptions = allYearOptions(year, lowerMargin, upperMargin);
  return (
    <React.Fragment>
      {yearOptions.map(e => (
        <Option key={e.value} value={e.value} label={e.label} />
      ))}
    </React.Fragment>
  );
};

YearOptions.defaultProps = {
  numberValues: false,
};

export default YearOptions;
