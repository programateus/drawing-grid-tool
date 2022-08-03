import { Box, styled } from "@mui/material";

export const RootStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "400px",
  margin: "auto",
  padding: 16,
  boxShadow: theme.customShadows.z1,
  backgroundColor: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
}));
