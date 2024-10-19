import moment from "moment";

export const formatMoment = (value: any, dateFormat: string) => {
  if (/^\d{4}\/\d{2}\/\d{2}$/.test(value) || /^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
    return moment(value, dateFormat);
  }
  return null;
};

export const dateToMoment = (date: Date, dateFormat: string) => {
  const d = date.getDate();
  const month = date.getMonth();
  const y = date.getFullYear();
  return moment({ d, month: month, y }).format(dateFormat);
};

export const formatDate = (value: any, dateFormat: string): any => {
  if (value === undefined) return undefined;
  if (moment.isMoment(value)) {
    return value.format(dateFormat);
  } else if (/^\d{4}-\d{2}-\d{2}$/g.test(value)) {
    // 2020-12-31 or 2020-31-12
    const [y, month, d] = value.split("-");
    if (dateFormat === "Y/MM/DD") {
      return moment({ d, month: month - 1, y }).format(dateFormat);
    } else if (dateFormat === "Y/DD/MM") {
      return moment({ d, month: month - 1, y }).format(dateFormat);
    } else if (dateFormat === "DD/MM/Y") {
      return moment({ d, month: month - 1, y }).format(dateFormat);
    } else if (dateFormat === "MM/DD/Y") {
      return moment({ d, month: month - 1, y }).format(dateFormat);
    }
  } else if (/^\d{4}\/\d{2}\/\d{2}$/.test(value)) {
    // 2020-12-31 or 2020-31-12
    const [y, month, d] = value.split("/");
    if (dateFormat === "Y/MM/DD") {
      return moment({ d, month: month - 1, y }).format(dateFormat);
    } else if (dateFormat === "Y/DD/MM") {
      return moment({ d, month: month - 1, y }).format(dateFormat);
    }
  } else if (/^\d{2}-\d{2}-\d{4}$/g.test(value)) {
    // 31-12-2020 or 12-31-2020
    const [d, month, y] = value.split("-");
    if (dateFormat === "DD/MM/Y") {
      return moment({ d, month: month - 1, y }).format(dateFormat);
    } else if (dateFormat === "MM/DD/Y") {
      return moment({ d, month: month - 1, y }).format(dateFormat);
    }
  } else if (/^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
    // 31/12/2020 or 12/31/2020
    const [d, month, y] = value.split("/");
    if (dateFormat === "DD/MM/Y") {
      return moment({ d, month: month - 1, y }).format(dateFormat);
    } else if (dateFormat === "MM/DD/Y") {
      return moment({ d, month: month - 1, y }).format(dateFormat);
    }
  }
  return value;
};

export const formatTime = (value: any, display: boolean): string => {
  let val = value.toString();
  let hours: string = "";
  let minutes: string = "";

  if (value && /^\d{0,2}:\d{0,2}$/.test(value)) {
    const result = val.split(":");

    // set first 0 if only one number
    hours = result[0].length === 1 ? `0${result[0]}` : result[0];
    minutes = result[1].length === 1 ? `0${result[1]}` : result[1];
  }
  // eslint-disable-next-line no-restricted-globals
  if (value && !isNaN(value)) {
    hours = (Number.parseInt(value, 0) / 60).toString();
    minutes = (Number.parseInt(value, 0) % 60).toString();

    // set first 0 if only one number
    hours = hours.length === 1 ? `0${hours}` : hours;
    minutes = minutes.length === 1 ? `0${minutes}` : minutes;
  }
  if (hours !== "" && minutes !== "") {
    val = `${hours}:${minutes}`;
  }
  return val;
};

export const formatNumber = (value: any): string | undefined => {
  const int = parseInt(value, 10);
  // eslint-disable-next-line no-restricted-globals
  if (int === parseFloat(value) && !isNaN(int)) {
    return int.toString();
  }
  return value;
};

export const formatFloat = (value: any): string | undefined => {
  const int = parseInt(value, 10);
  // eslint-disable-next-line no-restricted-globals
  if (int === parseFloat(value) && !isNaN(int)) {
    return int.toString();
  }
  return Number.parseFloat(value).toFixed(2);
};

export const formatPercent = (value: any): string | undefined => {
  if (!value) return undefined;
  const regEx = /^100$|^[0-9]{1,2}$|^[0-9]{1,2}\.[0-9]{1,2}$/;
  if (regEx.test(value)) {
    return `${value}`;
  }
  return value;
};

export const TimeToMoment = (value: Date) => {
  let hours = value.getHours();
  let minutes = value.getMinutes();
  let hours_ = hours.toString().length === 1 ? `0${hours}` : hours;
  let minutes_ = minutes.toString().length === 1 ? `0${minutes}` : minutes;
  let time = hours_ + ":" + minutes_;
  return time;
};

export const formatCurrency = (value: any) => {
  const base = value.replace(",", ".");
  const result = base.split(".");
  const a = result[0];
  const b = result[1] ? (result[1].length > 1 ? result[1] : result[1] + "0") : ",00";
  return `${a},${b}`;
};
