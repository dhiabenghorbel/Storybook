import React, { FunctionComponent, ReactElement } from "react";
import { startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";
import TableCard from "../../Table/TableCard.tsx";
import Table from "../../Table/Table.tsx";
import TableCell from "../../Table/Row/TableCell.tsx";
import CalendarDay from "../Day/CalendarDay.tsx";
import uuid from "../../../infrastructure/uuid";
import Tooltip from "../../Tooltip/Tooltip.tsx";

interface TeamPlanningCalendarProps {
  users: any;
  year: number;
  month: number;
  noText?: boolean;
  type: "absences" | "T&A" | "PIF";
  gpid: string;
  showCode: boolean;
}

const TeamPlanningCalendar: FunctionComponent<TeamPlanningCalendarProps> = ({ gpid, users, year, month, noText, type, showCode }): ReactElement => {
  const date = new Date(year, month - 1, 1);
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  return (
    <TableCard id={`monthcalendar-${date.getTime()}`}>
      <Table>
        <div id={`month-${uuid()}`} key={uuid()} className="flex-row-start">
          <TableCell height="small" withBorder lateralInfoCell />
          {monthDays.map(day => (
            <CalendarDay day={day} height="small" noText isMonday={day.getDay() === 1 && day.toString() !== monthStart.toString()} isSunday={day.getDay() === 0} showCode={false} />
          ))}
        </div>
        {users.map(user => {
        return (
          <div id={`month-${uuid()}`} key={uuid()} className="flex-row-start">
            <TableCell height="very-small" withBorder lateralInfoCell>
              <Tooltip text={user.name} withoutTranslation position="bottom">
                <div className="user-name-cell">{user.name}</div>
              </Tooltip>
            </TableCell>
            {monthDays.map(day => {
              const inputDate = new Date(day);
              const formattedDate = `${inputDate.getDate().toString().padStart(2, '0')}/${(inputDate.getMonth() + 1).toString().padStart(2, '0')}/${inputDate.getFullYear()}`;
              return (
                <CalendarDay
                day={day}
                absenceDays={user.absences[formattedDate]}
                height="very-small"
                noText={noText}
                showCode={showCode}
                showDate={false}
                isMonday={day.getDay() === 1 && day.toString() !== monthStart.toString()}
                // onClick={type === "T&A" ? () => showModal(<PlanningModal gpid={gpid} user={user} day={day} />) : undefined}
          />
        );
      })}
    </div>
  );
})}
      </Table>
    </TableCard>
  );
};

TeamPlanningCalendar.defaultProps = {
  noText: false,
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  users: [{
    absences:{
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
    dossier:"100025744",identi:"ATRATP-TT04",matcle:"ATP-TT04",name:"Gonzalez, Lautaro",picture:"0",soccle:"ATR"
}, 
{
  absences:{
    "02/05/2023" : {code:"MAL",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"Holiday reason",style1:"HOLIDAYS",style2:undefined},
    "03/05/2023" : {code:"MAL",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"Holiday reason",style1:"HOLIDAYS",style2:undefined},
    "06/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"dayOff",style1:"DAYOFF",style2:undefined},
    "07/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"dayOff",style1:"DAYOFF",style2:undefined},
    "13/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"dayOff",style1:"DAYOFF",style2:undefined},
    "14/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"dayOff",style1:"DAYOFF",style2:undefined},
    "20/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"dayOff",style1:"DAYOFF",style2:undefined},
    "21/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"dayOff",style1:"DAYOFF",style2:undefined},
    "27/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"dayOff",style1:"DAYOFF",style2:undefined},
    "28/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"dayOff",style1:"DAYOFF",style2:undefined},
},
  dossier:"100025644",identi:"ATRATP-TT01",matcle:"ATP-TT01",name:"Verrati, Marco",picture:"0",soccle:"ATR",
},
{
  absences:{
    "01/05/2023" : {code:"MAL",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"Holiday reason",style1:"HOLIDAYS",style2:undefined},
    "08/05/2023" : {code:"MAL",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"Holiday reason",style1:"HOLIDAYS",style2:undefined},
    "06/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"dayOff",style1:"DAYOFF",style2:undefined},
    "07/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"dayOff",style1:"DAYOFF",style2:undefined},
    "13/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"dayOff",style1:"DAYOFF",style2:undefined},
    "14/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"dayOff",style1:"DAYOFF",style2:undefined},
    "20/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"dayOff",style1:"DAYOFF",style2:undefined},
    "21/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"dayOff",style1:"DAYOFF",style2:undefined},
    "27/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"dayOff",style1:"DAYOFF",style2:undefined},
    "28/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"dayOff",style1:"DAYOFF",style2:undefined},
},
  dossier:"100028563",identi:"ATRATP-TT10",matcle:"ATP-TT10",name:"Diaz, Mariano",picture:"0",soccle:"ATR",
}]
}

export default TeamPlanningCalendar;
