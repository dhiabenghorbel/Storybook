import React, { ReactNode, Fragment } from "react";
import "../Table.scss";
import Icon from "../../Icon/Icon.tsx";

interface TableSortLabelProps {
  active: boolean;
  direction: "asc" | "desc";
  onClick: Function;
  children: ReactNode;
}

const TableSortLabel = ({ active, direction, onClick, children }: TableSortLabelProps) => {
  function handleToggle() {
    if (direction === "asc") {
      direction = "desc";
    } else if (direction === "desc") {
      direction = "asc";
    }
    onClick();
  }

  return (
    <div className="table-sort-label" onClick={() => handleToggle()}>
      {children}
      <Icon name={direction === "asc" ? "arrow-up" : "arrow-down"} style={active ? { opacity: 1 } : { opacity: 0 }} light={false} />
    </div>
  );
};

TableSortLabel.defaultProps = {
  active: false,
  direction: "asc",
  onClick: () => {},
  children: <Fragment />
};

export default TableSortLabel;
