import { Components, Theme } from "@mui/material";

export default function Baseline(theme: Theme): Components<Theme> {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          minHeight: "100vh",
        },
        body: {
          minHeight: "100vh",
        },
        "#__next": {
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        },
      },
    },
  };
}
