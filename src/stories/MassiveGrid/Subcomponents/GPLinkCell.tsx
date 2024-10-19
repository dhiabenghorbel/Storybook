import { GridCellProps } from "@progress/kendo-react-grid";
import React, { FunctionComponent } from "react";
import ButtonDefault from "../../Button/DefaultButton/ButtonDefault.tsx";
import Icon from "../../Icon/Icon.tsx";
import classnames from "classnames";
import { IGridColumn } from "../Interfaces/IGridColumn.ts";

export interface GPLinkCellProps {
  parentProps: GridCellProps;
  props: any;
  navigateGP: string;
  columnData: IGridColumn;
}

export const GPLinkCell: FunctionComponent<GPLinkCellProps> = ({ props, parentProps, navigateGP, columnData }: GPLinkCellProps) => {

  const { button, buttonLabel, locked, func } = columnData;
  const disabled = func ? func(parentProps.dataItem) : undefined;

  return button ? (
    <td className={classnames({ "k-grid-content-sticky": locked })} style={props.style} colSpan={1} role="gridcell" aria-colindex={2} aria-selected="false">
      <ButtonDefault
        text={buttonLabel}
        disabled={disabled}
        className={disabled ? "disable-action" : ""}
        // onClick={() => {
        //   subordinatesDispatch(SubordinatesContextActionCreators.setSelectedSubordinatesAction([nudoss]));
        //   onClick(navigateGP);
        // }}
      />
    </td>
  ) : (
    <td className={classnames({ "k-grid-content-sticky": locked })} colSpan={1} role="gridcell" aria-colindex={2} aria-selected="false">
      <Icon
        light
        disabled={disabled}
        className={disabled ? "disable-action" : ""}
        name="arrow-circle-right"
        style={{ color: "var(--colour-headerbg)" }}
        // onClick={() => {
        //   subordinatesDispatch(SubordinatesContextActionCreators.setSelectedSubordinatesAction([nudoss]));
        //   onClick(navigateGP);
        // }}
      />
    </td>
  );
};
