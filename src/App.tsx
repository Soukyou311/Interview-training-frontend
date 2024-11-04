import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AddQA from "./pages/AddQA";
import Test from "./pages/Test";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        height: "100vh", // 设置容器高度为视口高度
        width: "100vw", // 设置容器宽度为视口宽度
        backgroundImage: `url('/wallhaven-wem6mp.png')`, // 设置背景图片
        backgroundSize: "cover", // 使用 cover 使图像填满容器并保持比例
        backgroundRepeat: "no-repeat", // 不重复背景图像
        backgroundPosition: "center", // 背景图像居中
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddQA" element={<AddQA />} />
        <Route path="/Test" element={<Test />} />
      </Routes>
    </Box>
  );
}

export default App;
