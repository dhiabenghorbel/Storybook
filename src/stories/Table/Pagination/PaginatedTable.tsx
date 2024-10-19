import React from "react";
import useTablePagination from "../../../custom-hooks/Table/useTablePagination.tsx";
import uuid from "../../../infrastructure/processing/general/uuid.ts";
import Table from "../Table.tsx";
import TableBody from "../Body/TableBody.tsx";
import TableHeaders from "../Header/TableHeaders.tsx";
import TablePagination from "./TablePagination.tsx";
import TableRowCustom from "../Row/TableRowCustom.tsx";

interface PaginatedTableProps {
  objects: Object[];
  selected: Object;
  getObjectColor: Function;
  handleClick: Function;
  handleSelection: Function;
  handleMassSelection: Function;
  tableFields: Object[];  
  defaultRowsPerPage: number;
  initialPage: number;
  elements:Object[];
}

const PaginatedTable = ({
  defaultRowsPerPage,
  objects,
  handleClick,
  handleSelection,
  selected,
  tableFields,
  getObjectColor,
  handleMassSelection,
  initialPage,
  elements
}: PaginatedTableProps) => {
  const [ sort, handleSort] = useTablePagination(
    objects,
    selected,
    tableFields,
    handleMassSelection,
    defaultRowsPerPage,
    initialPage
  );

  const filteredTableFields = tableFields.filter(t => !t.hidden);    
  
  return (
    <div className="overflow-card">
      <Table>
        <TableHeaders sort={sort} handleSort={handleSort} fields={filteredTableFields}/>
        <TableBody>
          {elements.map(n => (
            <TableRowCustom
              key={uuid()}
              backgroundColor={getObjectColor(n)}
              fields={tableFields}
              /*handleSelection={handleSelection}
              handleClick={handleClick}*/
              object={n}
              selected={selected}
            />
          ))}
          
        </TableBody>
        <TablePagination />
      </Table>
    </div>
  );
};

PaginatedTable.defaultProps = {
  objects: [],
  selected: {},
  getObjectColor: () => "",
  handleClick: () => {},
  handleSelection: () => {},
  handleMassSelection: undefined,
  tableFields: [
  { selectable: true, label: "selected", translatedValue: true, translatedHeader: false, size : "" ,radio : false , button : false , hidden:false},
  { selectable: false, label: "date", translatedValue: true, translatedHeader: false, size : "" , radio : false , button : false, hidden:false},
  { selectable: false, label: "gpid", translatedValue: true, translatedHeader: false, size : "" , radio : false , button : false , hidden:false},
  { selectable: false, label: "message", translatedValue: true, translatedHeader: false,  size : "" ,radio : false , button : false, hidden:false},
  { selectable: false, label: "recipient", translatedValue: true, translatedHeader: false, size : "" , radio : false , button : false , hidden:false}],
  elements : [
  { date: "2023/03/10" , gpid: "ASW0ESE0" , message: "MESSAGE" , recipient: "Manager"} , 
  { date: "2023/10/12" , gpid: "ASW0E5E0" , message: "MESSAGE" , recipient: "Employee"} , 
  { date: "2023/11/06", gpid: "ASW000E0" , message: "MESSAGE" , recipient: "Manager"} ]
};

export default React.memo(PaginatedTable);
