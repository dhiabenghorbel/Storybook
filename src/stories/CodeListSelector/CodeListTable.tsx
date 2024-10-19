import React, { FunctionComponent, ReactElement } from "react";
import { IRule } from "../../app/models/IRule.ts";
import PaginatedTable from "../Table/Pagination/PaginatedTable.tsx";

interface CodeListTableProps {
  data: [IRule];
  onClick: any;
  elements : any;
}

const CodeListTable: FunctionComponent<CodeListTableProps> = ({ data, onClick, elements }): ReactElement => {
  const tableFields = [
    { selectable: false, label: "code", sortable: true, translatedHeader: true },
    { selectable: false, label: "label", sortable: true, translatedHeader: true }
  ];
  return <PaginatedTable objects={data} tableFields={tableFields} handleClick={onClick} elements={elements}/>;
};


export default CodeListTable;
