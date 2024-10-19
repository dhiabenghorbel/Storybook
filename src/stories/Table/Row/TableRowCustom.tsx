import React, { Fragment, useState } from "react";
import Checkbox from "../../DataItems/Boolean/Checkbox.tsx";
import uuid from "../../../infrastructure/processing/general/uuid.ts";
import { TableField } from "../../../app/models/ITableField.ts";
import { arrayContainsValue } from "../../../infrastructure/processing/general/arrayContainsValue.ts";
import TableCell from "./TableCell.tsx";
import TableRow from "./TableRow.tsx";
import TableFieldValue from "./TableFieldValue.tsx";
import CloseButton from "../../Button/CloseButton/CloseButton.tsx";

interface TableRowCustomProps {
  object: any;
  backgroundColor: string;
  selected: any; // { *label*: [objects] }
  handleClick: Function;
  handleSelection: Function;
  fields: TableField[];
}

const TableRowCustom = ({ object, selected, handleClick, handleSelection, fields, backgroundColor }: TableRowCustomProps) => {

  const [currentSelected, setCurrentSelected] = useState(selected);

  const toggleSelected = (selectedObject, label) => {
    setCurrentSelected(prevSelected => {
      const newSelected = {...prevSelected};
      
      if (newSelected[label]) {
        
        if (newSelected[label].some(obj => obj.id === selectedObject.id)) {
          // If it's already selected, remove it from the array
          newSelected[label] = newSelected[label].filter(obj => obj.id !== selectedObject.id);
        } else {
          // If it's not selected, add it to the array
          newSelected[label] = [...newSelected[label], selectedObject];
        }
      } else {
        // If the label key doesn't exist in the selected object, create a new key with the selected object as the value
        newSelected[label] = [selectedObject];
      }
      return newSelected;
    });
  };
  return (
    <TableRow key={uuid()} spaced pending={backgroundColor === "pending"} toDelete={backgroundColor === "delete"}>
      {fields.map(n => {
        if (n.selectable || n.button) {
          const disabled = n.isElementDisabled && n.isElementDisabled(object);
          return (
            <TableCell key={uuid()} size={n.size} alignStart>
              {n.button && (disabled ? <Fragment /> : <CloseButton onClick={() => toggleSelected(object, n.label)} />)}
              {n.radio && (
                <Checkbox
                  checked={currentSelected[n.label] === object.id || currentSelected[n.label] === object}
                  readOnly={disabled}
                  type="radio"
                  onChange={() => (disabled ? null : toggleSelected(object, n.label))}
                />
              )}
              {!n.button && !n.radio && (
                <Checkbox
                  checked={arrayContainsValue(currentSelected[n.label], object, object.id !== undefined)}
                  readOnly={disabled}
                  transparent={disabled}
                  onChange={() => (disabled ? null : toggleSelected(object, n.label))}
                />
              )}
            </TableCell>
          );
        }
        return (
          <TableCell key={uuid()} size={n.size} /*onClick={() => handleClick(object)}*/ withPadding alignStart alignEnd={n.alignEnd}>
            <TableFieldValue tableField={n} object={object} />
          </TableCell>
        );
      })}
    </TableRow>
  );
};

TableRowCustom.defaultProps = {
  object: {date: "2023/03/10" , gpid: "ASW0ESE0" , message: "MESSAGE" , recipient: "Manager"},
  selected: {},
  size: {},
  selectedDisabled: {},
  handleClick: () => {},
  handleSelection: () => {},
  backgroundColor: ["transparent" , "pending" , "delete"],
  fields: [
    { selectable: true, label: "selected", translatedValue: true, translatedHeader: false, radio : false , button : false},
    { selectable: false, label: "date", translatedValue: true, translatedHeader: false, radio : false , button : false},
    { selectable: false, label: "gpid", translatedValue: true, translatedHeader: false, radio : false , button : false },
    { selectable: false, label: "message", translatedValue: true, translatedHeader: false, radio : false , button : false},
    { selectable: false, label: "recipient", translatedValue: true, translatedHeader: false, radio : false , button : false }
  ]
};

export default TableRowCustom;
