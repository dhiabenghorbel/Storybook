import { create } from "@storybook/theming";
import logo from "../public/storybook.ico";

const lightTheme = create({
  base: "light",
  appBg: "white",
  brandTitle: "GP4You",
  brandTarget: "_self",
  colorPrimary: "#C7072E",
  colorSecondary: "#C7072E",
  brandImage: logo,
});

const darkTheme = create({
  base: "dark",
  appBg: "#2f3030",
  brandTitle: "GP4You",
  colorPrimary: "#C7072E",
  colorSecondary: "#C7072E",
  appContentBg: "#707780",
  barBg: "#2f3030",
  brandImage: logo,
  appContentBg: "#707780",
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: darkTheme,
    light: lightTheme,
    stylePreview: true,
  },
};
