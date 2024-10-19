import constants from "../../../../GP4You/constants";
import { formatCurrency, formatDate, formatFloat, formatNumber, formatPercent } from "../../../../stories/DataValue/StateSanitizers.ts";
import { minutesToTime } from "../../general/time.ts";

const applyValueModifiers = (
  value: any,
  type: string,
  radix: number | undefined,
  or: string[] | undefined,
  language: string,
  displayFormat: string = "DD/MM/Y"
): string | undefined => {
  if (value === undefined) return undefined;

  switch (type) {
    case "text":
      return value;
    case "time":
      return minutesToTime(value) || "";
    case "float":
      return formatFloat(value);
    case "percent":
      return formatPercent(value);
    case "customFloat":
      if (language === "es") {
        return Number.parseFloat(value).toLocaleString("es-ES", { maximumFractionDigits: radix, minimumFractionDigits: radix });
      } else if (language === "fr") {
        return Number.parseFloat(value).toLocaleString("fr-FR", { maximumFractionDigits: radix, minimumFractionDigits: radix });
      } else {
        return Number.parseFloat(value).toLocaleString("en-GB", { maximumFractionDigits: radix, minimumFractionDigits: radix });
      }
    case "numberic":
      return formatNumber(value);
    case "boolean": {
      if (or) {
        const [on, off] = or;
        return value === on ? on : off;
      }
    }
    case "date":
    case "year":
    case "rangeDate":
    case "yearMonth":
      return formatDate(value, constants.DATE_FORMAT);
    case "customDate":
      return formatDate(value, displayFormat);
    case "currency":
      return formatCurrency(value);
    default:
      return value;
  }
};

export default applyValueModifiers;
