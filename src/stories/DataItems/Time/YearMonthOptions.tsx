import React, { FunctionComponent, ReactElement } from "react";
import { allYearMonthOptions } from "../../../infrastructure/processing/general/time.ts";
import Option from "../../Select/Option/Option.tsx";

interface YearMonthOptionss {
  lowerMargin?: number;
}

const YearMonthOptions: FunctionComponent<YearMonthOptionss> = ({ lowerMargin }): ReactElement => {
  const year = new Date().getFullYear();

  const yearMontOptions = allYearMonthOptions(year, lowerMargin);
  return (
    <React.Fragment>
      {yearMontOptions.map(e => (
        <Option key={e.value} value={e.value} label={e.label} />
      ))}
    </React.Fragment>
  );
};

YearMonthOptions.defaultProps = {
  lowerMargin: 20
};

export default YearMonthOptions;
