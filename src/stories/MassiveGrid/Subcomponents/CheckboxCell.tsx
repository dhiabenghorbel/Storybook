import React, { useState } from "react";

export const CheckboxCell = ({ props }) => {

  const [value, setValue] = useState(props.dataItem[props.field]);

  const disabled: boolean = props.editor && props.dataItem.inEdit ? false : true;

  const handleChange = (e: any) => {
    const value = e.target.checked;
    setValue(value);

    props.onChange({
      dataItem: props.dataItem,
      field: props.field,
      syntheticEvent: e.nativeEvent,
      value: value
    });
  };

  return (
    <td style={{ textAlign: "center" }}>
      <input type="checkbox" onChange={handleChange} checked={value} disabled={disabled} />
    </td>
  );
};
