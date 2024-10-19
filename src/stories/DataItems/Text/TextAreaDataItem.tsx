import React, { FunctionComponent, ReactElement } from "react";
import TextArea from "../../Input/Textarea/Textarea.tsx";
import { IDataItem, defaultProps } from "../../../app/models/IDataItem.ts";
//import useStatefulDataItem from "../../../custom-hooks/DataItem/useStatefulDataItem";

const TextAreaDataItem: FunctionComponent<IDataItem> = (props): ReactElement => {
  //const [value, onChange] = useStatefulDataItem(props);
  
  if (props.hidden || (props.hideIfNoValue && (!props.value || props.value === ""))) return <React.Fragment />;
  return (
    <TextArea
      readOnly={props.readOnly}
      label={props.label || props.name}
      required={props.required}
      //onChange={(e: any) => onChange(e.target.value)}
      value={props.value}
      id={props.name}
      aligned={props.aligned}
      smallSize={props.smallSize}
      bold={props.bold}
      first={props.first}
      regExp={props.regex}
      max={props.max}
      min={props.min}
      validationType={props.validationType}
      textAreaHeight={props.textAreaHeight}
    />
  );
};

TextAreaDataItem.defaultProps = defaultProps;

export default TextAreaDataItem;
