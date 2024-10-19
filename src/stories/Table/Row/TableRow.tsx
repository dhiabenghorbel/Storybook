import React, { ReactNode } from "react";
import classnames from 'classnames';

interface TableRowProps {
  toDelete: boolean,
  pending: boolean,
  children: ReactNode;
  onClick: Function;
  id: string;
  spaced: boolean,
  clickable: boolean,
}

const TableRow = ({ toDelete, pending, children, onClick, id, spaced, clickable }: TableRowProps) => {
  return (
    <div
      className={classnames(
        "table-row",
        { 'cursor-pointer' : clickable },
        { "flex-row-center": !spaced },
        { "flex-row-space-between": spaced },
        "full-width",
        { 'table-delete-row': toDelete },
        { 'table-pending-row': pending },
      )}
      onClick={onClick && clickable
        ? () => { onClick(); }
        : () => {}
      }
      id={id}
    >
      {children}
    </div>
  );
};

TableRow.defaultProps = {
  toDelete: false,
  pending: false,
  children: <React.Fragment > {"Row label"} </React.Fragment>,
  onClick: undefined,
  id: "",
  spaced: false,
  clickable: true,
};

export default TableRow;
