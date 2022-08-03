import { useMemo } from "react";
import {
  CssBaseline,
  ThemeOptions,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { ptBR } from "@mui/material/locale";

import componentsOverrides from "./overrides";
import { palette } from "./palette";
import typography from "./typography";
import { customShadows } from "./shadows";
// import { shadows, customShadows } from "./shadows";

type ThemeConfigProps = {
  children: React.ReactNode;
};

const ThemeConfig = ({ children }: ThemeConfigProps) => {
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: palette.light,
      // shadows: shadows.dark,
      customShadows: customShadows.light,
      typography,
    }),
    []
  );

  const theme = createTheme({ ...themeOptions }, ptBR);
  theme.components = componentsOverrides(theme) as any;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeConfig;
