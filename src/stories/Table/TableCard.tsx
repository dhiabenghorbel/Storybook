import React, { ReactNode } from "react";
import "./Table.scss";

interface TableCardProps {
  children: ReactNode;
  id: string;
}

const TableCard = ({ children, id }: TableCardProps) => {
  return (
    <div className="table-card" id={id}>
      {children}
    </div>
  );
};

TableCard.defaultProps = {
  children: <React.Fragment >{""}</React.Fragment>,
  id: ""
};

export default TableCard;
