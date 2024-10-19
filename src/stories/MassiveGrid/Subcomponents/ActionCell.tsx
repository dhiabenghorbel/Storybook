import { GridCellProps } from "@progress/kendo-react-grid";
import React, { FunctionComponent, ReactElement } from "react";
import Icon from "../../Icon/Icon.tsx";

interface ActionCellProps {
  parentProps: GridCellProps;
  onClick: Function;
}

const ActionCell: FunctionComponent<ActionCellProps> = (props: ActionCellProps): ReactElement => {
  const icon = props.parentProps.dataItem[props.parentProps.field] === "add" ? "plus-square" : "minus-square";

  return (
    <td colspan="1" class="k-grid-content-sticky" role="gridcell" aria-colindex="2" aria-selected="false" style={{ left: "0px", right: "260px", padding: "0" }}>
      <Icon name={icon} style={{ color: "var(--colour-headerbg" }} onClick={() => props.onClick(props.parentProps.dataItem)} disabled={props.parentProps.editor === "disabled"} />
    </td>
  );
};

export default ActionCell;
