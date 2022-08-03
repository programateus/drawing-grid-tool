import {
  ColorPartial,
  PaletteOptions,
} from "@mui/material/styles/createPalette";

export const primary = {
  main: "#1976d2",
  light: "#42a5f5",
  dark: "#1565c0",
  contrastText: "#fff",
};

export const secondary = {
  main: "#9c27b0",
  light: "#ba68c8",
  dark: "#7b1fa2",
  contrastText: "#fff",
};

export const error = {
  main: "#d32f2f",
  light: "#ef5350",
  dark: "#c62828",
  contrastText: "#fff",
};

export const warning = {
  main: "#ed6c02",
  light: "#ff9800",
  dark: "#e65100",
  contrastText: "#fff",
};

export const info = {
  main: "#0288d1",
  light: "#03a9f4",
  dark: "#01579b",
  contrastText: "#fff",
};

export const success = {
  main: "#2e7d32",
  light: "#4caf50",
  dark: "#1b5e20",
  contrastText: "#fff",
};

export const text = {
  primary: "rgba(0, 0, 0, 0.87)",
  secondary: "rgba(0, 0, 0, 0.6)",
  disabled: "rgba(0, 0, 0, 0.38)",
  primaryChannel: "0 0 0",
  secondaryChannel: "0 0 0",
};

export const divider = "rgba(0, 0, 0, 0.12)";

export const background = {
  paper: "#fff",
  default: "#fff",
};

export const action = {
  active: "rgba(0, 0, 0, 0.54)",
  hover: "rgba(0, 0, 0, 0.04)",
  hoverOpacity: 0.04,
  selected: "rgba(0, 0, 0, 0.08)",
  selectedOpacity: 0.08,
  disabled: "rgba(0, 0, 0, 0.26)",
  disabledBackground: "rgba(0, 0, 0, 0.12)",
  disabledOpacity: 0.38,
  focus: "rgba(0, 0, 0, 0.12)",
  focusOpacity: 0.12,
  activatedOpacity: 0.12,
  activeChannel: "0 0 0",
  selectedChannel: "0 0 0",
};

export const grey: ColorPartial = {
  50: "#FAFAFA",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161",
} as const;

export const common = {
  black: "#000",
  white: "#fff",
  primary,
  secondary,
  error,
  info,
  warning,
  success,
  text,
  divider,
  background,
  action,
  grey,
};

export const palette: { light: PaletteOptions; dark: PaletteOptions } = {
  light: {
    ...common,
    mode: "light",
    text: {
      primary: grey[800],
      secondary: grey[600],
      disabled: grey[500],
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
  },
  dark: {
    ...common,
    mode: "dark",
    text: {
      primary: "#fff",
      secondary: grey[500],
      disabled: grey[600],
    },
    background: {
      default: grey[900],
      paper: grey[800],
    },
  },
};
