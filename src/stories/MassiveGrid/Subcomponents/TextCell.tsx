import { GridCellProps } from "@progress/kendo-react-grid";
import classnames from "classnames";
import moment from "moment";
import React, { FunctionComponent, ReactElement, useState } from "react";
import constants from "../../../GP4You/constants";
import { IGridColumn } from "../Interfaces/IGridColumn.ts";
import { getColumnsIndex } from "../Utils/Events.ts";

interface TextCellProps {
  props: GridCellProps;
  columnData: IGridColumn;
}

const TextCell: FunctionComponent<TextCellProps> = ({ props, columnData }): ReactElement => {
  const { locked, type, func, color } = columnData;
  const [newClass, setNewClass] = useState("");
  const [value, setValue] = useState("");
  const { dataIndex, editor, dataItem, onChange, field, style } = props;

  const disabled: boolean = editor && dataItem.inEdit ? false : true;
  const marked = func ? func(props.dataItem) : undefined;

  // const getRegexValidator = (validatorType: string) => {
  //   let regex = undefined;
  //   let msg = "";
  //   switch (validatorType) {
  //     case "positive-number":
  //       regex = "^[0-9]+\\.?[0-9]{0,2}$";
  //       msg = "allow-positive-numbers";
  //       break;
  //     default:
  //       regex = "^\\-?([0-9]+)?\\.?[0-9]{0,2}$";
  //       msg = "allow-all-numbers";
  //       break;
  //   }
  //   return [regex, msg];
  // };

  const handleChange = (e: any) => {
    const value = e.target.value;
    // if (type === "number") {
    //   const [regex, msg] = getRegexValidator(validator);
    //   // if (!isValidRegEx(value, regex)) {
    //   //   e.preventDefault();
    //   //   showAlert(e.target, msg);
    //   //   return;
    //   // }
    // }
    setNewClass("cell-modified");
    setValue(value);
    onChange({
      dataItem: dataItem,
      field: field,
      syntheticEvent: e.nativeEvent,
      value: value
    });
  };

  // const showAlert = (element: HTMLElement, msg: string) => {
  //   let alert = document.createElement("div");
  //   alert.className = "alert-warning";
  //   alert.innerHTML = msg ;
  //   let warningTimeout;

  //   warningTimeout = setTimeout(() => {
  //     alert.parentNode.removeChild(alert);
  //     warningTimeout = -1;
  //   }, 2000);

  //   if (document.body.contains(alert)) {
  //     clearTimeout(warningTimeout);
  //   } else {
  //     element.parentNode.insertBefore(alert, element.nextSibling);
  //   }
  // };

  // useEffect(() => {
  //   const propValue = dataItem[field];
  //   setValue(propValue);
  //   const modifiedData = states.fieldsModified;
  //   const modifiedItem = modifiedData.find(e => e.sub["id"] === dataItem["id"]);
  //   if (!modifiedItem) setNewClass("");
  //   else {
  //     if (modifiedItem.fields.includes(field)) setNewClass("cell-modified");
  //   }
  // }, [dataItem[field]]);

  return (
    <td className={classnames({ "k-grid-content-sticky": locked })} style={style}>
      <input
        row={dataIndex}
        column={getColumnsIndex(field)}
        type="text"
        className={classnames("k-textbox", `${newClass}`, {
          "k-grid-content-sticky": locked,
          "on-move": !disabled,
          "cell-marked": marked
        })}
        value={type === "date" && value ? moment(value).format(constants.DATE_FORMAT) : value}
        onChange={handleChange}
        disabled={disabled}
        style={{ overflowWrap: "break-word", color: color, border: "none", backgroundColor: "transparent" }}
      />
    </td>
  );
};

export default TextCell;
