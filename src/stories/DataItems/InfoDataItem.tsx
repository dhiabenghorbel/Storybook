import React, { FunctionComponent, ReactElement } from "react";
import { IDataItem, defaultProps } from "../../app/models/IDataItem.ts";
import classnames from "classnames";

const InfoDataItem: FunctionComponent<IDataItem> = (props): ReactElement => {

  return (
    <React.Fragment>
      <span className={classnames("infoInput", { "text-bold": props.bold }, { "text-red": props.red })}>{props.value}</span>
    </React.Fragment>
  );
};

InfoDataItem.defaultProps = defaultProps;

export default InfoDataItem;
