import moment from "moment";
import { format } from "date-fns";

const minutesToTimeString = (totalMinutes: any) => {
  if (!totalMinutes && totalMinutes !== "0") return totalMinutes;
  if (totalMinutes >= 60) {
    const hoursDiv = Math.floor(totalMinutes / 60).toString();
    const hours = hoursDiv.length !== 2 ? `0${hoursDiv}` : hoursDiv;
    const minutesMod = (totalMinutes % 60).toString();
    const minutes = minutesMod.length !== 2 ? `0${minutesMod}` : minutesMod;
    return `${hours}:${minutes}`;
  }
  if (totalMinutes <= -60) {
    let hoursDiv = Math.floor(Math.abs(totalMinutes / 60)).toString();
    const hours = hoursDiv.length !== 2 ? `-0${hoursDiv}` : `-${hoursDiv}`;
    const minutesMod = Math.abs(totalMinutes % 60).toString();
    const minutes = minutesMod.length !== 2 ? `0${minutesMod}` : minutesMod;
    return `${hours}:${minutes}`;
  }
  const minutes = totalMinutes.length !== 2 ? `0${totalMinutes}` : totalMinutes;
  return `00:${minutes}`;
};

export function minutesToTime(totalMinutes: any) {
  if (!totalMinutes) return totalMinutes;
  if (!isNaN(totalMinutes)) {
    // it is a number
    return minutesToTimeString(totalMinutes);
  }
  const matches = /^\d\d:\d\d/.test(totalMinutes);
  if (matches) {
    const [hours, minutes] = totalMinutes.split(":").map((e: string) => parseInt(e, 0));
    const hourMinutes = hours * 60;
    const tminutes = hourMinutes + minutes;
    return minutesToTimeString(tminutes);
  }
  return totalMinutes;
}

export function dateToLocale(date = undefined, locale = "es") {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  if (date) {
    return new Date(date).toLocaleDateString(locale, options);
  }
  return new Date().toLocaleDateString(locale, options);
}

export function dateToLocaleNumbered(date = undefined) {
  if (date) {
    return format(date, "yyyy/MM/dd", { awareOfUnicodeTokens: true });
  }
  return format(new Date(), "yyyy/MM/dd", { awareOfUnicodeTokens: true });
}

export function timeToMinutes(hours: string) {
  if (hours && hours.match("^(2[0-3]|[01]?[0-9]):([0-5][0-9])$")) {
    const array_hours = hours.split(":");
    const hours_ = parseInt(array_hours[0]);
    const minutes_ = parseInt(array_hours[1]);

    return (hours_ * 60 + minutes_).toString();
  }
  return hours;
}

export function formatDate(value: any) {
  if (!value) return "";
  if (/^([0-3]?[0-9])\/([0-1]?[0-9])\/\d{4}/.test(value)) {
    return moment(value, "DD/MM/Y").format("Y-MM-DD");
  }
  return value;
}

export function formatDate2(value: any) {
  if (!value) return "";
  if (/^([0-3]?[0-9])\/([0-1]?[0-9])\/\d{4}/.test(value)) {
    return moment(value, "DD/MM/Y").format("Y-MM-DD");
  }
  return moment(value, "Y/MM/DD").format("Y-MM-DD");
}

export function formatDateSpain(value: any) {
  if (!value) return "";
  if (value === "0001-01-01") return "01/01/0001";
  return moment(value).format("DD/MM/YYYY");
}

export const getYearString = (year: number) => {
  const date = new Date();
  if (year) {
    return `01/01/${year}`;
  }
  return `01/01/${date.getFullYear()}/`;
};

export const allYearOptions = (year: number, lowerMargin = 20, upperMargin = 20) => {
  const yearOptions = [];
  for (let index = year - lowerMargin; index <= year + upperMargin; index++) {
    yearOptions.push({ value: getYearString(index), label: index.toString() });
  }

  return yearOptions;
};

export const getYearMonthString = (month: number, year: number) => {
  const date = new Date();
  if (year) {
    return month < 10 ? `01/0${month}/${year}` : `01/${month}/${year}`;
  }
  return `${date.getFullYear()}/${month}/01/`;
};

export const allYearMonthOptions = (year: number, lowerMargin = 20) => {
  const yearOptions = [];

  for (let index = year; index > year - lowerMargin; index--) {
    for (let i = 12; i >= 1; i--) {
      yearOptions.push({ value: getYearMonthString(i, index), label: i < 10 ? `0${i}/${index}` : `${i}/${index}` });
    }
  }

  return yearOptions;
};

export const allMonthOptions = () => {
  return [
    { value: "01", label: "january" },
    { value: "02", label: "february" },
    { value: "03", label: "march" },
    { value: "04", label: "april" },
    { value: "05", label: "may" },
    { value: "06", label: "june" },
    { value: "07", label: "july" },
    { value: "08", label: "august" },
    { value: "09", label: "september" },
    { value: "10", label: "october" },
    { value: "11", label: "november" },
    { value: "12", label: "december" }
  ];
};
