import React, { FunctionComponent, ReactElement } from "react";
import PaginatedTable from "../Table/Pagination/PaginatedTable.tsx";

interface CodeDataItemTableProps {
  data: any;
  onClick: any;
  types: any;
}

const CodeDataItemTable: FunctionComponent<CodeDataItemTableProps> = ({ data, types, onClick }): ReactElement => {
  let tableFields = [];
  let elements = [];
  for (const item in data) {
    let object = {};
    for (const test in data[item].data) {
      object[data[item].data[test].item] = data[item].data[test].value;
    }
    elements.push(object);
  }
  for (const item in data) {
    for (const test in data[item].data) {
      if (item === "0") {
        tableFields.push({
          selectable: false,
          label: `${data[item].data[test].item}`,
          sortable: true,
          translatedHeader: true,
          translateValue: types[test] === "text",
          isDateValue: types[test] === "date",
          isTimeValue: types[test] === "time"
        });
      }
    }
  }
  return <PaginatedTable objects={elements} tableFields={tableFields} handleClick={onClick} />;
};

export default CodeDataItemTable;
