import React, { ReactNode } from "react";
import "../Table.scss";
import classnames from "classnames";

interface TableHeadProps {
  children: ReactNode;
  calendar: Boolean;
  spaced: boolean;
}

const TableHead = ({ children, spaced, calendar }: TableHeadProps) => {
  return (
    <div
      className={classnames(
        "table-row",
        { "flex-row-center": !spaced },
        { "flex-row-space-between": spaced },
        "full-width",
        "border-bottom",
        { "table-head-background": !calendar },
        { "calendar-head": calendar }
      )}
    >
      {children}
    </div>
  );
};

TableHead.defaultProps = {
  children: <React.Fragment > {"Table Head title"} </React.Fragment>,
  calendar: false,
  spaced: false
};

export default TableHead;
