import React, { useState, useEffect } from "react";
import { Typography, Switch } from "@mui/material";
import {
  Container,
  QuestionBox,
  ButtonGroup,
  CustomButton,
} from "../style/style";
import useFetchRandomQA from "../hooks/useFetchRandomQA"; // 导入自定义 Hook

function Test() {
  const [refresh, setRefresh] = useState(false); // 用于触发更新
  const [showAnswer, setShowAnswer] = useState(false); // 控制答案显示
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(true); // 控制语音功能开启状态
  const { question, answer, loading, error } = useFetchRandomQA(refresh); // 使用自定义 Hook

  const handleNextQuestion = () => {
    speechSynthesis.cancel(); // 强制打断当前朗读
    setShowAnswer(false); // 重置答案显示状态
    setRefresh((prev) => !prev); // 切换 refresh 状态
  };

  const handleShowAnswer = () => {
    setShowAnswer(true); // 显示答案
    speechSynthesis.cancel(); // 强制打断当前朗读
    if (isVoiceEnabled) {
      // 检查语音功能是否开启
      const utterance = new SpeechSynthesisUtterance(answer); // 创建语音合成对象
      utterance.lang = "ja-JP"; // 设置语言为日语
      speechSynthesis.speak(utterance); // 朗读答案
    }
  };

  useEffect(() => {
    if (question) {
      speechSynthesis.cancel(); // 在每次新问题加载前取消之前的朗读
      const utterance = new SpeechSynthesisUtterance(question); // 创建语音合成对象
      utterance.lang = "ja-JP"; // 设置语言为日语
      if (isVoiceEnabled) {
        // 检查语音功能是否开启
        speechSynthesis.speak(utterance); // 朗读题目
      }
    }
  }, [question, isVoiceEnabled]); // 当 question 或 isVoiceEnabled 变化时触发

  return (
    <Container>
      {/* 右上角的语音开关 */}
      <div style={{ position: "absolute", top: 10, right: 10 }}>
        <Typography variant="body2" component="span" style={{ marginRight: 5 }}>
          音声
        </Typography>
        <Switch
          checked={isVoiceEnabled}
          onChange={() => setIsVoiceEnabled((prev) => !prev)}
          color="primary"
        />
      </div>

      <QuestionBox>
        <Typography variant="body1" gutterBottom>
          {loading
            ? "加载中..." // 加载状态
            : error
            ? `出错了: ${error.message}` // 错误处理
            : question}{" "}
          {/* 显示问题 */}
        </Typography>
      </QuestionBox>
      <QuestionBox>
        <Typography variant="body1" gutterBottom>
          {showAnswer ? answer : ""} {/* 根据状态决定是否显示答案 */}
        </Typography>
      </QuestionBox>
      <ButtonGroup>
        <CustomButton variant="contained" onClick={handleShowAnswer}>
          答えを表示
        </CustomButton>
        <CustomButton variant="contained" onClick={handleNextQuestion}>
          次の問題
        </CustomButton>
      </ButtonGroup>
    </Container>
  );
}

export default Test;
