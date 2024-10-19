import { hashStringToColor } from "./ColorFunctions";
import planningColors from "../../../app/styles/Colors/planningColors";
import chartColors from "../../../app/styles/Colors/chartColors";

const colors = {
  ...planningColors,
  ...chartColors
};

export const getColor = label => {
  if (!label) return "#cecece";
  if (colors[label]) return colors[label];

  const color = hashStringToColor(label);
  colors[label] = color;
  return color;
};

export const getColorByCode = code => {
  switch (code) {
    case "J001":
    case "FLOC":
      return colors.GTALESS;
    case "J00S":
    case "J00D":
      return colors.GTANOWORK;
    default:
      return colors.GTANOWORK;
  }
};
