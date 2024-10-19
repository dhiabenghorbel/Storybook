import React, { FunctionComponent, ReactElement } from "react";
import { IDataItem, defaultProps } from "../../../app/models/IDataItem.ts";
import MaterialTimePicker from "./MaterialTimePicker.tsx";

const TimePickerDataItem: FunctionComponent<IDataItem> = (props): ReactElement => {
  let [value, onChange]: [string | undefined, Function] = [undefined, () => {}];
  if (props.hidden || (props.hideIfNoValue && (!value || value === ""))) return <React.Fragment />;

  return (
    <React.Fragment>
      <MaterialTimePicker
        value={value}
        onChange={(e: any) => onChange(e)}
        aligned={props.aligned}
        marginLeft={props.marginLeft}
        extraSmallSize={props.extraSmallSize}
        smallSize={props.smallSize}
        mediumSize={props.mediumSize}
        bigSize={props.bigSize}
        readOnly={props.readOnly}
        label={props.label}
        required={props.required}
      />
    </React.Fragment>
  );
};
TimePickerDataItem.defaultProps = defaultProps;

export default TimePickerDataItem;
