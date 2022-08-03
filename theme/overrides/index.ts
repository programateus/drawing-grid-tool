import { Components, Theme } from "@mui/material";

import Baseline from "./Baseline";

export default function componentsOverrides(theme: Theme): Components<Theme> {
  return Object.assign(Baseline(theme));
}
