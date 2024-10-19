import React from "react";
import TableCell from "../../Table/Row/TableCell.tsx";
import TableHead from "../../Table/Header/TableHead.tsx";

interface CalendarHeadersProps {
  days: string[];
}

const CalendarHeaders = ({ days }: CalendarHeadersProps) => {
  return (
    <TableHead calendar spaced>
      {days.map(e => (
        <TableCell key={e} bold cellCalendarHeader alignCenter>
          {e}
        </TableCell>
      ))}
    </TableHead>
  );
};

CalendarHeaders.defaultProps = {
  days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
};

export default CalendarHeaders;
