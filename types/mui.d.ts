import type {} from "@mui/lab/themeAugmentation";
import { Components } from "@mui/material";
import { CustomShadows } from "@theme/shadows";
export {};

// declare module "@mui/material/styles/createPalette" {}

declare module "@mui/material/styles/createTheme" {
  interface Theme {
    customShadows: CustomShadows;
  }
}
