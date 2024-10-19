import { IAbsence } from "../../../app/models/IAbsence.ts";
import { eachDayOfInterval } from "date-fns";

const getAbsenceDays = (absences: IAbsence[] | undefined): any => {
  if (!absences) return [];
  const absenceDays: any = {};  
  absences.forEach(e => {
    if (e.date) {
      Array.isArray(absenceDays[e.date])
        ? absenceDays[e.date] = Array.from(new Set([...absenceDays[e.date], e]))
        : absenceDays[e.date] = [e];
    }
    else if (e.startDate && e.endDate) {
      const days = eachDayOfInterval({ start: e.startDate, end: e.endDate });
      days.forEach(i => {
        if (Array.isArray(absenceDays[i.toLocaleDateString()]) && Array.length > 1) {
          // using set to clean if reason is already present
          absenceDays[i.toLocaleDateString()] = Array.from(new Set([...absenceDays[i.toLocaleDateString()], e]));
        } else absenceDays[i.toLocaleDateString()] = [e];
      });
    }
    else if (e.startDate) {
      //Absence without end date (replicate absence incrementing a day)
      /* if (e.code === code) {
        nextDate === undefined
          ? nextDate = getNextDate(e.startDate, 1)
          : nextDate = getNextDate(nextDate, 1);

        absenceDays[nextDate.toLocaleDateString()] = [e];
      }
      else {
        code = e.code;
        absenceDays[e.startDate.toLocaleDateString()] = [e];
      } */
      Array.isArray(absenceDays[e.startDate.toLocaleDateString()])
        ? absenceDays[e.startDate.toLocaleDateString()] = Array.from(new Set([...absenceDays[e.startDate.toLocaleDateString()], e]))
        : absenceDays[e.startDate.toLocaleDateString()] = [e];
    }
  });
  return absenceDays;
};

export default getAbsenceDays;
