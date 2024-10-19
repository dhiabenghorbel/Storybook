import React from "react";
import { IAbsence } from "../../../app/models/IAbsence.ts";
//  import absenceProcessing from "../../../infrastructure/processing/absences/index.ts";
import CalendarDay from "../Day/CalendarDay.tsx";
import TableBody from "../../Table/Body/TableBody.tsx";
import uuid from "../../../infrastructure/uuid";
import TableCell from "../../Table/Row/TableCell.tsx";

interface AnualCalendarBodyProps {
  months: Date[][];
  absences: IAbsence[];
}

const AnnualCalendarBody = ({ months, absences }: AnualCalendarBodyProps) => {

  const monthsNames = {"MONTH01" : "January","MONTH02" : "February" ,"MONTH03" : "March" ,"MONTH04" : "April" ,"MONTH05" : "May" ,"MONTH06" : "June" ,"MONTH07" : "July" ,"MONTH08" : "August" ,"MONTH09" : "September" ,"MONTH10" : "October" ,"MONTH11" : "November" ,"MONTH12" : "December"};
  let i = 1;
  return (
    <TableBody fitContent>
      {months.map(days => {
        // map every row to 31 cells
        // add a CalendarDay if day exists in array or an empty CalendarDay if not
        const dayCells : any = [];
        for (let j = 0; j < 31; j++) {
          const day = days[j];
          //convert day to DD/MM/YYYY
          const inputDate = new Date(day);
          const formattedDate = `${inputDate.getDate().toString().padStart(2, '0')}/${(inputDate.getMonth() + 1).toString().padStart(2, '0')}/${inputDate.getFullYear()}`;
          // if (day) 
          dayCells.push(<CalendarDay day={new Date(day)} /*absenceDays={absences[i-1]}*/ absenceDays={absences[formattedDate]} height="medium" noText />);
          // else dayCells.push(<CalendarDay height="medium" noText empty />);
        }
        const row = (
          <div id={`month-${uuid()}`} key={uuid()} className="flex-row-space-between full-width">
            <TableCell height="medium" alignCenter withBorder lateralInfoCell>
              {/* <FormattedMessage id={`MONTH${i < 10 ? `0${i}` : i}`} /> */}
              {monthsNames[`MONTH${i < 10 ? `0${i}` : i}`]}
            </TableCell>
            {dayCells}
          </div>
        );
        i++;
        return row;
      })}
    </TableBody>
  );
};

AnnualCalendarBody.defaultProps = {
  months: [[
    "Sun Jan 01 2023 00:00:00 GMT+0000 (heure moyenne de Greenwich)",
    "Mon Jan 02 2023 00:00:00 GMT+0000 (heure moyenne de Greenwich)",
    "Tue Jan 03 2023 00:00:00 GMT+0000 (heure moyenne de Greenwich)",
    "Wed Jan 04 2023 00:00:00 GMT+0000 (heure moyenne de Greenwich)",
    "Thu Jan 05 2023 00:00:00 GMT+0000 (heure moyenne de Greenwich)",
    "Fri Jan 06 2023 00:00:00 GMT+0000 (heure moyenne de Greenwich)",
    "Sat Jan 07 2023 00:00:00 GMT+0000 (heure moyenne de Greenwich)",
    "Sun Jan 08 2023 00:00:00 GMT+0000 (heure moyenne de Greenwich)",
    "Mon Jan 09 2023 00:00:00 GMT+0000 (heure moyenne de Greenwich)",
    "Tue Jan 10 2023 00:00:00 GMT+0000 (heure moyenne de Greenwich)",
    "Wed Jan 11 2023 00:00:00 GMT+0000 (heure moyenne de Greenwich)",
    "Thu Jan 12 2023 00:00:00 GMT+0000 (heure moyenne de Greenwich)",
    "Fri Jan 13 2023 00:00:00 GMT+0000 (heure moyenne de Greenwich)",
    "Sat Jan 14 2023 00:00:00 GMT+0000 (heure moyenne de Greenwich)",
    "Sun Jan 15 2023 00:00:00 GMT+0000 (heure moyenne de Greenwich)",
    "Mon Jan 16 2023 00:00:00 GMT+0000 (heure moyenne de Greenwich)",
    "Tue Jan 17 2023 00:00:00 GMT+0000 (heure moyenne de Greenwich)",
    "Wed Jan 18 2023 00:00:00 GMT+0000 (heure moyenne de Greenwich)",
    "Thu Jan 19 2023 00:00:00 GMT+0000 (heure moyenne de Greenwich)",
    "Fri Jan 20 2023 00:00:00 GMT+0000 (heure moyenne de Greenwich)",
    "Sat Jan 21 2023 00:00:00 GMT+0000 (heure moyenne de Greenwich)",
    "Sun Jan 22 2023 00:00:00 GMT+0000 (heure moyenne de Greenwich)",
    "Mon Jan 23 2023 00:00:00 GMT+0000 (heure moyenne de Greenwich)",
    "Tue Jan 24 2023 00:00:00 GMT+0000 (heure moyenne de Greenwich)",
    "Wed Jan 25 2023 00:00:00 GMT+0000 (heure moyenne de Greenwich)",
    "Thu Jan 26 2023 00:00:00 GMT+0000 (heure moyenne de Greenwich)",
    "Fri Jan 27 2023 00:00:00 GMT+0000 (heure moyenne de Greenwich)",
    "Sat Jan 28 2023 00:00:00 GMT+0000 (heure moyenne de Greenwich)",
    "Sun Jan 29 2023 00:00:00 GMT+0000 (heure moyenne de Greenwich)",
    "Mon Jan 30 2023 00:00:00 GMT+0000 (heure moyenne de Greenwich)",
    "Tue Jan 31 2023 00:00:00 GMT+0000 (heure moyenne de Greenwich)",
  ]],
  absences: {
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
};

export default AnnualCalendarBody;
