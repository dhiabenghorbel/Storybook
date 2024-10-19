import getMonthDays from "./getMonthDays.ts";

const getMonthsWithDays = (year: number): Date[][] => {
  const months = [];
  for (let i = 0; i < 12; i++) {
    const weeks = getMonthDays(year, i);
    months.push(weeks);
  }
  return months;
};

export default getMonthsWithDays;
