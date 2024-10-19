import React, { FunctionComponent, ReactElement } from "react";
import NumberFormat from "react-number-format";
import TextField from "../../Input/TextField/TextField.tsx";
import { IDataItem } from "../../../app/models/IDataItem.ts";


const FloatDataItem: FunctionComponent<IDataItem> = (props): ReactElement => {

  if (props.hidden || (props.hideIfNoValue && (!props.value || props.value === ""))) return <React.Fragment />;
  return (
    <NumberFormat
      disabled={props.readOnly}
      readOnly={props.readOnly}
      name={props.name}
      label={props.name}
      required={props.required}
      //style={occurrenceProcessing.getStyledField(props.aligned, props.smallSize, props.bold)}
      customInput={TextField}
      isNumericString
      value={props.value}
      //onValueChange={values => onChange(values.value)}
    />
  );
};


export default FloatDataItem;
