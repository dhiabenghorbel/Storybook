import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import classnames from "classnames";
import React, { FunctionComponent, ReactElement, useState } from "react";
import uuid from "../../../infrastructure/processing/general/uuid.ts";
import { IDataItem } from "../../../app/models/IDataItem.ts";

interface RadioDataItemProps {
  RadioDataItemOptions : string[] | any;
}

const RadioDataItem: FunctionComponent<IDataItem & RadioDataItemProps> = (props): ReactElement => {
  const [value, onChange] = useState("rad1");

  if (props.hidden || (props.hideIfNoValue && (!value || value === ""))) return <React.Fragment />;
  //const opts = React.Children.map(props.children, child => child).map((o: any) => o.props);
  const id = uuid();
  return (
    <div id={id} className={classnames({ "inline-grid": props.aligned })}>
      {props.label && props.label !== " " && (
        <label className={classnames("radio-input-label", { "text-disabled": props.readOnly })} htmlFor={id}>
          {props.label}
        </label>
      )}
      <div className="flex-row-start">
        <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group" name="controlled-radio-buttons-group" value={value} row onChange={(e: any) => onChange(e.target.value)}>
          {(props.RadioDataItemOptions).map(option => (
            <FormControlLabel
              disabled={props.readOnly}
              checked={option.value === value}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

RadioDataItem.defaultProps = {
  RadioDataItemOptions :  [{value : "rad1" , label :"Radio 1"},{value : "rad2" , label :"Radio 2"}]
};

export default RadioDataItem;
