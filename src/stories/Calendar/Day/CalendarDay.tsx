import React, { FunctionComponent, ReactElement } from "react";
import CalendarEvent from "./CalendarEvent.tsx";
import "../Calendar.scss";
import TableCell from "../../Table/Row/TableCell.tsx";
import uuid from "../../../infrastructure/uuid";
import moment from "moment";

interface CalendarDayProps {
  day?: Date | any;
  month?: number;
  absenceDays?: any;
  noText?: boolean;
  size?: "small" | "medium" | "big";
  height?: "very-small" | "small" | "medium" | "big";
  empty?: boolean;
  checkSameMonth?: boolean;
  showDate?: boolean;
  onClick?: Function;
  isMonday?: boolean;
  isSunday?: boolean;
  showCode: boolean;
}

const CalendarDay: FunctionComponent<CalendarDayProps> = ({
  day,
  month,
  checkSameMonth,
  absenceDays,
  noText,
  empty,
  showDate,
  size,
  height,
  onClick,
  isMonday,
  isSunday,
  showCode,
}): ReactElement => {
  
  day = new Date(day);
  const language  = "en";
  const today = new Date().toLocaleDateString();
  const currentDay = day ? day.toLocaleDateString() === today && !empty : false;
  const isValidDate = !isNaN(Date.parse(day))
  let content = <React.Fragment />;
  
  if (!empty && isValidDate) {
    content = (
      <React.Fragment>
        {showDate && (
          <div className="calendar-date">
            <div>{moment(day).format("dd")}</div>
            <div>{day.toLocaleDateString(language, { day: "2-digit" })}</div>
          </div>
        )}
          <CalendarEvent absence={absenceDays}  showCode={showCode} noText={noText}/>
      </React.Fragment>
    );
  }

  return (
    <TableCell
      id={day ? day : undefined}
      key={uuid()}
      height={height}
      currentDay={currentDay}
      notSameMonth={day ? month !== day.getMonth() && checkSameMonth : false}
      alignTop
      withBorder
      size={size}
      onClick={onClick}
      isMonday={isMonday}
      isSunday={ isSunday}
    >
      {content}
    </TableCell>
  );
};

CalendarDay.defaultProps = {
  day : new Date("2023-05-10"),
  month: new Date().getMonth(),
  onClick: () => {},
  absenceDays:{},
  noText: false,
  size: "small",
  height: "big",
  empty: false,
  checkSameMonth: false,
  showDate: true,
  isMonday: false,
  isSunday: false,
  showCode: false
};

export default CalendarDay;
