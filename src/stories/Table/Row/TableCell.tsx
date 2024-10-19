import React, { CSSProperties, FunctionComponent, ReactElement } from "react";
import classnames from "classnames";
import "../Table.scss";

export interface TableCellProps {
  children?: ReactElement | ReactElement[];
  onClick?: Function;
  bold?: boolean;
  id?: string;
  style?: CSSProperties;
  currentDay?: boolean;
  notSameMonth?: boolean;
  size?: "small" | "medium" | "big";
  height?: "very-small" | "small" | "medium" | "big";
  halfWidth?: boolean;
  fullWidth?: boolean;
  cellCalendarHeader?: boolean;
  rounded?: boolean;
  alignTop?: boolean;
  alignCenter?: boolean;
  alignCenterReverse?: boolean;
  withBorder?: boolean;
  withMargin?: boolean;
  withPadding?: boolean;
  cursorPointer?: boolean;
  lateralInfoCell?: boolean;
  alignStart?: boolean;
  alignEnd?: boolean;
  isMonday?: boolean;
  isSunday?: boolean;
}

const TableCell: FunctionComponent<TableCellProps> = ({
  children,
  onClick,
  bold,
  id,
  style,
  size,
  height,
  currentDay,
  notSameMonth,
  alignTop,
  alignCenter,
  alignCenterReverse,
  withBorder,
  withMargin,
  withPadding,
  cellCalendarHeader,
  rounded,
  lateralInfoCell,
  cursorPointer,
  alignStart,
  alignEnd,
  isMonday,
  isSunday
}): ReactElement => {
  return (
    <div
      className={classnames(
        "table-cell",
        { "border-bottom border-left": withBorder },
        { "padding-left-right": withPadding },
        size ? `table-cell-${size}` : "full-width",
        height ? `table-cell-${height}-height` : "full-height",
        { "calendar-current-day": currentDay },
        { "calendar-not-same-month": notSameMonth },
        { "margin-left-right": withMargin },
        { "text-bold": bold },
        { "text-top": alignTop },
        { "flex-column-center": alignCenter },
        { "flex-column-reverse": alignCenterReverse },
        { "flex-row-start": alignStart && !alignTop },
        { "flex-row-end": alignEnd },
        { "table-cell-calendar-header": cellCalendarHeader },
        { "cursor-pointer": cursorPointer },
        { "lateral-cell": lateralInfoCell },
        { rounded },
        { "border-left-black": isMonday },
        { "table-cell-sunday": isSunday }
      )}
      onClick={onClick ? () => onClick() : () => {}}
      id={id}
      style={style}
    >
      {children}
    </div>
  );
};

TableCell.defaultProps = {
  children: <React.Fragment > {"Table Cell"} </React.Fragment>,
  onClick: () => {},
  bold: false,
  alignTop: false,
  alignCenter: false,
  id: "",
  style: {},
  currentDay: false,
  notSameMonth: false,
  size: undefined,
  height: undefined,
  rounded: false,
  withBorder: false,
  withMargin: false,
  withPadding: false,
  cellCalendarHeader: false,
  cursorPointer: false,
  lateralInfoCell: false,
  alignStart: true,
  alignEnd: false,
  isMonday: false
};

export default TableCell;
