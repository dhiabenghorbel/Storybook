import { GridCellProps } from "@progress/kendo-react-grid";
import React, { FunctionComponent, ReactElement } from "react";
import Icon from "../../Icon/Icon.tsx";
import Tooltip from "../../Tooltip/Tooltip.tsx";

const StatusCell: FunctionComponent<GridCellProps> = (props: GridCellProps): ReactElement => {
  const status = props.dataItem["status"];
  const error = props.dataItem["error"];
  return (
    <td>
      {status ? (
        status === "OK" ? (
          <Icon name="check-circle" style={{ color: "var(--colour-secondary" }} />
        ) : (
          <Tooltip position="bottom" text={error ? error.code || error.label : ""}>
            <Icon name="exclamation-circle" style={{ color: "var(--colour-danger" }} />
          </Tooltip>
        )
      ) : (
        <React.Fragment />
      )}
    </td>
  );
};

export default StatusCell;
