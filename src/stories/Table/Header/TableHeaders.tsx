import React, { Fragment } from "react";
import Checkbox from "../../DataItems/Boolean/Checkbox.tsx";
//import { FormattedMessage } from "react-intl";
import { TableField } from "../../../app/models/ITableField.ts";
import { Sort } from "../../../app/models/ISort.ts";
import TableHead from "./TableHead.tsx";
import TableSortLabel from "./TableSortLabel.tsx";
import uuid from "../../../infrastructure/processing/general/uuid.ts";
import TableCell from "../Row/TableCell.tsx";

interface TableHeadersProps {
  sort: Sort;
  handleSort: Function;
  fields: TableField[];
  selectedLabels: string[];
  selectAll?: Function;
}

const TableHeaders = ({ sort, handleSort, fields, selectedLabels, selectAll }: TableHeadersProps) => {

  const content = (n: TableField) => {
    return (
      <Fragment>
        {n.selectable && selectAll ? (
          <Checkbox checked={selectedLabels.find(e => e === n.label) !== undefined} onChange={n.label ? () => selectAll(n.label) : () => {}} style={!n.sortable ? { margin: 0 } : {}} />
        ) : (
          <Fragment />
        )}
        <span onClick={handleSort ? () => handleSort(n.dataItem ? n.dataItem.name : n.label) : () => {}}>
          {/*n.label ? n.translatedHeader ? <FormattedMessage key={n.label} id={n.label} /> : n.label : <Fragment />*/}
          {n.label}
        </span>
      </Fragment>
    );
  };

  return (
    <TableHead>
      {fields.map(n => (
        <TableCell
          key={uuid()}
          size={n.size}
          withPadding={!n.selectable || (n.selectable && !n.sortable)}
          bold
          alignCenterReverse={n.selectable && selectAll && !n.sortable}
          alignEnd={n.alignEnd}
        >
            {//<TableSortLabel key={n.label} active={(n.dataItem ? n.dataItem.name : n.label) === sort.label} direction={sort.direction}>
            }
            <TableSortLabel key={n.label} active={true} direction={sort.direction}>
              {content(n)}
            </TableSortLabel>
            </TableCell>
         ))
         }
    </TableHead>
  );
};

TableHeaders.defaultProps = {
  sort: {direction : "asc"},
  handleSort: () => {},
  selectAll: undefined,
  selectedLabels: [{ selectable: false, label: "@date" }],
  fields: [
    { selectable: true, label: "selected" },
    { selectable: false, label: "date" },
    { selectable: false, label: "gpID" },
    { selectable: false, label: "message" },
    { selectable: false, label: "recipient" }
  ]
};

export default TableHeaders;
