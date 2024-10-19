import React, { ReactNode } from "react";
import classnames from 'classnames';

interface TableBodyProps {
  children: ReactNode;
  fitContent: boolean,
}

const TableBody = ({ children, fitContent }: TableBodyProps) => {
  return (
    <div className={classnames(
    "flex-column-start",
      "full-width",
      { "table-body": !fitContent }
    )}
    >
      {children}
    </div>
  );
};

TableBody.defaultProps = {
  children: <React.Fragment > {"Table body content"} </React.Fragment>,
  fitContent: false,
};

export default TableBody;
