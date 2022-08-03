import { Container, Stack, styled } from "@mui/material";

export const RootStyle = styled(Stack)(({ theme }) => ({
  height: "100vh",
  maxHeight: "100vh",
  display: "flex",
  overflow: "hidden",
  justifyContent: "center",
  backgroundColor: theme.palette.grey[200],
  [theme.breakpoints.down("md")]: {
    maxHeight: "none",
    height: "auto",
    overflow: "auto",
  },
}));

export const HomeContainer = styled(Container)(({ theme }) => ({
  padding: 4,
  [theme.breakpoints.up("md")]: {
    backgroundColor: theme.palette.common.white,
    borderRadius: Number(theme.shape.borderRadius) * 2,
    boxShadow: theme.customShadows.card,
  },
}));
