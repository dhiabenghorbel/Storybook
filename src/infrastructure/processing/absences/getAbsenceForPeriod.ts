import { IAbsence } from "../../../models/IAbsence";
import { isAfter, isBefore, isWithinInterval } from "date-fns";

const getAbsenceForPeriod = (absences: IAbsence[], start: Date, end: Date): IAbsence[] => {
  return absences.filter(e => {
    if (e.startDate) {
      if (e.endDate) {
        if (isBefore(e.startDate, start) && isAfter(e.endDate, end)) return true;
        return isWithinInterval(e.startDate, { start, end }) || isWithinInterval(e.endDate, { start, end });
      }
      return isWithinInterval(e.date, { start, end });
    }
    return false;
  });
};

export default getAbsenceForPeriod;
