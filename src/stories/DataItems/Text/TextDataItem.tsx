import React, { FunctionComponent, ReactElement } from "react";
import TextField from "../../Input/TextField/TextField.tsx";
//import useStatefulDataItem from "../../../custom-hooks/DataItem/useStatefulDataItem";
//import useFilterItem from "../../../custom-hooks/DataItem/useFilterItem";
import { IDataItem, defaultProps } from "../../../app/models/IDataItem.ts";

const TextDataItem: FunctionComponent<IDataItem> = (props): ReactElement => {


  if (props.hidden || (props.hideIfNoValue && (!props.value || props.value === ""))) return <React.Fragment />;
  return (
    <TextField
      type={props.type}
      readOnly={props.readOnly}
      label={props.withoutLabel ? undefined : props.label || props.name}
      required={props.required}
      /*onChange={(e: React.ChangeEvent<any>) => {
        if (onChangeSelect) onChangeSelect(e.target.value);
        onChange(e.target.value);
      }}*/
      value={props.value}
      id={props.name}
      regExp={props.regex}
      aligned={props.aligned}
      smallSize={props.smallSize}
      mediumSize={props.mediumSize}
      marginLeft={props.marginLeft}
      bigMarginRight={props.bigMarginRight}
      bigSize={props.bigSize}
      extraSmallSize={props.extraSmallSize}
      unitSize={props.unitSize}
      bold={props.bold}
      first={props.first}
      step={props.step}
      min={props.min}
      max={props.max}
      color={props.color}
      validationType={props.validationType}
    />
  );
};

TextDataItem.defaultProps = defaultProps;

export default TextDataItem;
