import { Box, styled } from "@mui/material";

export const RootStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  flex: 1,
  margin: "auto",
  backgroundColor: theme.palette.common.white,
  borderRadius: Number(theme.shape.borderRadius) * 2,
}));
