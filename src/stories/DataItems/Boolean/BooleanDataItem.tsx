import React, { FunctionComponent, ReactElement } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Validation from "../../Input/Validation/Validation.tsx";
import { IDataItem, defaultProps } from "../../../app/models/IDataItem.ts";
import classNames from "classnames";

const BooleanDataItem: FunctionComponent<IDataItem> = (props): ReactElement => {

  if (props.hidden || (props.hideIfNoValue && (!props.value || props.value === ""))) return <React.Fragment />;
  return (
    <React.Fragment>
      <div className={classNames("inline-grid")}>
        <FormControlLabel
          control={
            <Checkbox
              disabled={props.readOnly}
              checked={props.or ? props.value === props.or[1] : props.value === "X"}
              color="default"
              name={props.name}
              //onChange={({ target }) => onChange(target.checked ? target.value : props.or ? props.or[0] : "")}
              required={props.required}
              value={props.or ? props.or[1] : "X"}
            />
          }
          label={<span className={classNames({ "text-disabled": props.readOnly })}>{props.label || props.name}</span>}
        />
        <Validation readOnly={props.readOnly} type={props.type} value={props.value} required={props.required} />
      </div>
    </React.Fragment>
  );
};

BooleanDataItem.defaultProps = defaultProps;

export default BooleanDataItem;
