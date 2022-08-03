import { TypographyOptions } from "@mui/material/styles/createTypography";

import { pxToRem } from "./utils";

const typography: TypographyOptions = {
  fontFamily: "Public Sans, sans-serif",
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontSize: pxToRem(40),
    fontWeight: 700,
  },
  h2: {
    fontSize: pxToRem(32),
    fontWeight: 700,
  },
  h3: {
    fontSize: pxToRem(24),
    fontWeight: 700,
  },
  h4: {
    fontSize: pxToRem(20),
    fontWeight: 700,
  },
  h5: {
    fontSize: pxToRem(18),
    fontWeight: 700,
  },
  h6: {
    fontSize: pxToRem(17),
    fontWeight: 700,
  },
  subtitle1: {
    fontSize: pxToRem(16),
    fontWeight: 600,
  },
  subtitle2: {
    fontSize: pxToRem(14),
    fontWeight: 600,
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: "capitalize",
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
};

export default typography;
