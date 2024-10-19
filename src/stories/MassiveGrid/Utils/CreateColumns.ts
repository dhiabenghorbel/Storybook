import { GridCellProps, GridColumn } from "@progress/kendo-react-grid";
import React, { ReactElement } from "react";
import { IGridColumn } from "../Interfaces/IGridColumn";
import ActionCell from "../Subcomponents/ActionCell.tsx";
import { CheckboxCell } from "../Subcomponents/CheckboxCell.tsx";
import CheckboxFilter from "../Subcomponents/CheckboxFilter.tsx";
import DropDownCell from "../Subcomponents/DropDownCell.tsx";
import { GPLinkCell } from "../Subcomponents/GPLinkCell.tsx";
import ReportLinkCell from "../Subcomponents/ReportLinkCell.tsx";
import StatusCell from "../Subcomponents/StatusCell.tsx";
import { TextAreaCell } from "../Subcomponents/TextAreaCell.tsx";
import TextCell from "../Subcomponents/TextCell.tsx";

/**
 * This function return different cell type depend on column type property
 */
const checkType = (column: IGridColumn) => {
  let cell = undefined;
  const type = column.type;
  switch (type) {
    case "default":
      cell = undefined;
      break;
    case "date":
    case "text":
    case "number":
      cell = (props: GridCellProps) => React.createElement(TextCell, { props: props, columnData: column });
      break;
    case "textArea":
      cell = (props: GridCellProps) => React.createElement(TextAreaCell, { props: props, width: column.width });
      break;
    case "checkbox":
      cell = (props: GridCellProps) => React.createElement(CheckboxCell, { props: props });
      break;
    case "select":
      cell = (props: GridCellProps) => React.createElement(DropDownCell, { props: props, columnProps: column });
      break;
    case "action":
      cell = (props: GridCellProps) => React.createElement(ActionCell, { parentProps: props });
      break;
    case "status":
      cell = StatusCell;
      break;
    case "gplink":
      cell = (props: GridCellProps) =>
        React.createElement(GPLinkCell, {
          props: props,
          parentProps: props,
          navigateGP: props.field.split(".")[1],
          columnData: column
        });
      break;
    case "reportlink":
      cell = (props: GridCellProps) => React.createElement(ReportLinkCell, { props: props, items: column.items, id: column.id });
      break;
    default:
      break;
  }
  return cell;
};

/**
 * This function return array of Grid Column (React Element) from columns array and all of its properties.
 * They will be mapped on the grid
 */
export const createColumns = (columns: any, readOnly: any): ReactElement[] => {
  // const intl = useIntl();
  const result: ReactElement[] = [];
  let children: ReactElement[] = [];
  let lastSuperTitle: string | undefined = "";
  columns.map(column => {
    const cell = checkType(column);
    const title = column.title ? column.title : column.label ;
    const currentColumn: ReactElement = React.createElement(GridColumn, {
      ...column,
      title,
      cell,
      columnMenu:  CheckboxFilter ,
      editor: column.editor
    });

    if (column.superHead) {
      if (column.superHeadTitle !== lastSuperTitle) {
        if (children.length > 0) result.push(React.createElement(GridColumn, { title: lastSuperTitle }, children));
        children = [];
      }
      children.push(currentColumn);
      lastSuperTitle = column.superHeadTitle;
    } else {
      if (children.length > 0) {
        result.push(React.createElement(GridColumn, { title: lastSuperTitle }, children));
        children = [];
      }
      result.push(currentColumn);
    }
    return null;
  });
  return result;
};
