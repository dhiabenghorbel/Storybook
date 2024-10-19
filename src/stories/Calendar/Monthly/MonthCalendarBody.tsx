import React from "react";
import { IAbsence } from "../../../app/models/IAbsence.ts";
import { startOfWeek, eachDayOfInterval } from "date-fns";
import { endOfWeek } from "date-fns/esm";
import CalendarDay from "../Day/CalendarDay.tsx";
import TableBody from "../../Table/Body/TableBody.tsx";

interface CalendarBodyProps {
  weeks: Date[];
  absences: IAbsence[];
  month: number;
}

const MonthCalendarBody = ({ weeks, absences, month }: CalendarBodyProps) => {

  return (
    <TableBody fitContent>
      {weeks.map(e => {
        const weekStart = startOfWeek(e, { weekStartsOn: 1 });
        const weekEnd = endOfWeek(e, { weekStartsOn: 1 });
        const weekDays = eachDayOfInterval({ start: weekStart, end: weekEnd });
        console.log("weekDays" , weekDays);
        return (
          <div id={`week-${weekStart.toLocaleDateString()}-${weekEnd.toLocaleDateString()}`} key={e.toLocaleDateString()} className="flex-row-space-between full-width">
            {weekDays.map(j => {
              const inputDate = new Date(j);
              const formattedDate = `${inputDate.getDate().toString().padStart(2, '0')}/${(inputDate.getMonth() + 1).toString().padStart(2, '0')}/${inputDate.getFullYear()}`;
              return (<CalendarDay key={j} day={j} absenceDays={absences[formattedDate]} month={month} checkSameMonth height="big" />)
            }
            )}
          </div>
        );
      })}
    </TableBody>
  );
};

MonthCalendarBody.defaultProps = {
  weeks: [],
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
  month: new Date().getMonth()
};

export default MonthCalendarBody;
