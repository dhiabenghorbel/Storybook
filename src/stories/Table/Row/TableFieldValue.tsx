import React, { Fragment } from "react";
import moment from "moment";
import { TableField } from "../../../app/models/ITableField.ts";
import TableOccurrenceValue from "./TableOccurrenceValue.tsx";
import Icon from "../../Icon/Icon.tsx";
import constants from "../../../GP4You/constants";
import { formatTime } from "../../DataValue/StateSanitizers.ts";

interface TableFieldValueProps {
  tableField: TableField;
  object: any ;
  // added props for storybook controls
  color : string;
}

const TableFieldValue = ({ tableField, object, color }: TableFieldValueProps) => {
  if (tableField.isOccurrence && tableField.dataItem) {
    return <TableOccurrenceValue  /*occurrence={object}*/ dataItem={tableField.dataItem} />;
  }
  const value = object[tableField.label];

  if (value) {
    if (tableField.translatedValue) return  <p>{value}</p>  ;
    if (tableField.withColor && color === "orange")
      return (
        <p style={{ color: "orange" }}>
          {value}
        </p>
      );
    else if (tableField.withColor && color === "green")
      return (
        <p style={{ color: "green" }}>
          {value}
        </p>
      );
    else if (tableField.withColor && color === "red")
      return (
        <p style={{ color: "red" }}>
          {value}
        </p>
      );
    if (tableField.isDateValue) return moment(value).format(constants.DATE_FORMAT);
    if (tableField.isTimeValue) return formatTime(value, true);
    if (tableField.withDraftIcon /*&& tableField.withDraftIcon(object)*/) return <Icon name="edit" disabled />;
    else if (tableField.withDraftIcon && !tableField.withDraftIcon(object)) return null;
    if (tableField.withFileIcon /*&& tableField.withFileIcon(object)*/) return <Icon name="paperclip" disabled />;
    else if (tableField.withFileIcon && !tableField.withFileIcon(object)) return null;
    return value;
  }

  return <Fragment />;
};

TableFieldValue.defaultProps = {
  tableField : { isOccurrence: false,
    dataItem: {
      type: 'boolean',
      or: ['X', '']
    },
    label: 'message',
    translatedValue: true,      
    isDateValue:false ,
    isTimeValue:false,
    withDraftIcon:false ,
    withFileIcon:false,
    withColor:false
  },
  object : { date: "2022-01-01" , time : "1208"  , message: "message"  },
  color : "red"
}


export default TableFieldValue;
