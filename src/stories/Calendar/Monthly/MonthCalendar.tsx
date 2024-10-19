import React from "react";
import { IAbsence } from "../../../app/models/IAbsence.ts";
import { startOfMonth, endOfMonth, eachWeekOfInterval } from "date-fns";
import CalendarHeaders from "./CalendarHeaders.tsx";
import MonthCalendarBody from "./MonthCalendarBody.tsx";
import Table from "../../Table/Table.tsx";
import TableCard from "../../Table/TableCard.tsx";

interface MonthCalendarProps {
  absences: IAbsence[];
  year: number;
  month: number;
}

const MonthCalendar = ({ absences, year, month }: MonthCalendarProps) => {
  const date = new Date(year, month - 1, 1);
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);

  const weeks = eachWeekOfInterval({ start: monthStart, end: monthEnd }, { weekStartsOn: 1 });

  return (
    <TableCard id={`monthcalendar-${date.getTime()}`}>
      <Table>
        <CalendarHeaders />
        <MonthCalendarBody weeks={weeks} absences={absences} month={month - 1} />
      </Table>
    </TableCard>
  );
};

MonthCalendar.defaultProps = {
  absences : {
    "06/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"dayOff",style1:"DAYOFF",style2:undefined},
    "07/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"dayOff",style1:"DAYOFF",style2:undefined},
    "09/05/2023" : {code:"MAL",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"Sickness",style1:"SICKNESS",style2:undefined},
    "10/05/2023" : {code:"MAL",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"Sickness",style1:"SICKNESS",style2:undefined},
    "13/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"dayOff",style1:"DAYOFF",style2:undefined},
    "14/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"dayOff",style1:"DAYOFF",style2:undefined},
    "20/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"dayOff",style1:"DAYOFF",style2:undefined},
    "21/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"dayOff",style1:"DAYOFF",style2:undefined},
    "24/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"Holiday reason",style1:"HOLIDAYS",style2:undefined},
    "25/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"Holiday reason",style1:"HOLIDAYS",style2:undefined},
    "27/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"dayOff",style1:"DAYOFF",style2:undefined},
    "28/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"dayOff",style1:"DAYOFF",style2:undefined},
},
  year: new Date().getFullYear(),
  month: new Date().getMonth()
};

export default MonthCalendar;
