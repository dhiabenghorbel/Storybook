import { GridCellProps } from "@progress/kendo-react-grid";
import React, { FunctionComponent, useEffect, useState } from "react";
import { states } from "../StatesObjects.ts";
import { getColumnsIndex } from "../Utils/Events.ts";

export const TextAreaCell: FunctionComponent<GridCellProps> = ({ props, width }: any) => {
  const [value, setValue] = useState("");
  const [newClass, setNewClass] = useState("");
  const { dataIndex } = props;

  const disabled: boolean = props.editor && props.dataItem.inEdit ? false : true;

  const handleChange = (e: any) => {
    const value = e.target.value;
    setNewClass("cell-modified");
    setValue(value);

    props.onChange({
      dataItem: props.dataItem,
      field: props.field,
      syntheticEvent: e.nativeEvent,
      value: value
    });
  };

  useEffect(() => {
    const propValue = props.dataItem[props.field];
    setValue(propValue);
    const modifiedData = states.fieldsModified;
    const modifiedItem = modifiedData.find(e => e.sub["id"] === props.dataItem["id"]);
    if (!modifiedItem) setNewClass("");
    else {
      if (modifiedItem.fields.includes(props.field)) setNewClass("cell-modified");
    }
  }, [props.field , props.dataItem]);

  const styles = {
    width: width - 10 //To have margin for both sides
  };

  return (
    <div>
      <textarea
        row={dataIndex}
        column={getColumnsIndex(props.field)}
        style={styles}
        value={value}
        className={`${!disabled ? "on-move" : ""} k-textbox k-textArea ${newClass}`}
        onChange={handleChange}
        disabled={disabled}
      />
    </div>
  );
};
