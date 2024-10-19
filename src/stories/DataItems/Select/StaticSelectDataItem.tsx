import React, { FunctionComponent, ReactElement } from "react";
import Select from "../../Select/Select.tsx";
import Validation from "../../Input/Validation/Validation.tsx";
import { IDataItem } from "../../../app/models/IDataItem.ts";
import classnames from "classnames";

const StaticSelectDataItem: FunctionComponent<IDataItem> = (props): ReactElement => {
  let [value, onChange]: [string | undefined, Function] = [undefined, () => {}];

  if (props.hidden || (props.hideIfNoValue && (!value || value === ""))) return <React.Fragment />;
  const { onChangeSelect, smallSize, extraSmallSize, mediumSize, aligned } = props;
  return (
    <div
      className={classnames(
        "inline-grid",
        { "full-width": !aligned },
        { "half-width": mediumSize && aligned },
        { "third-width": smallSize && aligned },
        { "fourth-width": extraSmallSize && aligned },
        { "text-disabled": props.readOnly }
      )}
    >
      <Select
        readOnly={props.readOnly}
        name={props.name}
        onChange={(e: Event) => {
          if (onChangeSelect) onChangeSelect(e);
          onChange(e);
        }}
        required={props.required}
        value={`${value}`}
        label={props.label || props.name}
        bold={props.bold}
        withoutLabel={props.withoutLabel}
      >
          <option value={0} label={"option 1"}/>
          <option value={1} label={"option 2"}/>
          <option value={2} label={"option 3"}/>
      </Select>
      <Validation readOnly={props.readOnly} type={props.type} value={value} required={props.required} />
    </div>
  );
};

export default StaticSelectDataItem;
