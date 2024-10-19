import { eachDayOfInterval, endOfMonth, startOfMonth } from "date-fns";

const getMonthDays = (year: number, month: number): Date[] => {
  const date = new Date(year, month, 1);
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);

  return eachDayOfInterval({ start: monthStart, end: monthEnd });
};

export default getMonthDays;
