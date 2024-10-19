import React, { ReactNode } from "react";
import "./Table.scss";
import classnames from "classnames";

interface TableProps {
  children: ReactNode;
}

const Table = ({ children }: TableProps) => {
  return <div className={classnames("table-box")}>{children}</div>;
};

Table.defaultProps = {
  children: <React.Fragment />
};

export default Table;
