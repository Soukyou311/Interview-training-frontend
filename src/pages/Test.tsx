import React from "react";
import { Typography } from "@mui/material";
import {
  Container,
  QuestionBox,
  ButtonGroup,
  CustomButton,
} from "../style/style";
import useFetchRandomQA from "../hooks/useFetchRandomQA"; // 导入自定义 Hook

function Test() {
  const { question, answer, loading, error } = useFetchRandomQA(); // 使用自定义 Hook

  if (loading) {
    return <Typography variant="body1">加载中...</Typography>; // 加载状态
  }

  if (error) {
    return <Typography variant="body1">出错了: {error.message}</Typography>; // 错误处理
  }

  return (
    <Container>
      <QuestionBox>
        <Typography variant="body1" gutterBottom>
          {question} {/* 显示问题 */}
        </Typography>
      </QuestionBox>
      <QuestionBox>
        <Typography variant="body1" gutterBottom>
          {answer} {/* 显示答案 */}
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
