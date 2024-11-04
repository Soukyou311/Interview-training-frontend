// TestStyles.ts
import { styled } from "@mui/material/styles";
import { alpha, Box, Button } from "@mui/material";
import { blue } from "@mui/material/colors";

export const Container = styled(Box)({
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  overflow: "hidden",
});

export const QuestionBox = styled(Box)({
  width: "450px",
  height: "100px",
  backgroundColor: alpha(blue[500], 0.7),
  overflow: "auto",
  padding: "10px",
  marginBottom: "50px",
});

export const ButtonGroup = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "50px",
});

export const CustomButton = styled(Button)({
  width: "200px",
  height: "60px",
  fontSize: "1.2rem",
});
