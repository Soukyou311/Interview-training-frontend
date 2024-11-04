import React from "react";
import { Typography } from "@mui/material";
import {
  Container,
  QuestionBox,
  ButtonGroup,
  CustomButton,
} from "../style/style";

function Test() {
  return (
    <Container>
      <QuestionBox>
        <Typography variant="body1" gutterBottom>
          这是题目
        </Typography>
      </QuestionBox>
      <QuestionBox>
        <Typography variant="body1" gutterBottom>
          这是答案
        </Typography>
      </QuestionBox>
      <ButtonGroup>
        <CustomButton variant="contained">显示答案</CustomButton>
        <CustomButton variant="contained">下一题</CustomButton>
      </ButtonGroup>
    </Container>
  );
}

export default Test;
