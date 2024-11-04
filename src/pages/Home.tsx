import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // 导入 useNavigate 钩子

function Home() {
  const navigate = useNavigate(); // 初始化导航函数

  return (
    <Box
      sx={{
        height: "100vh", // 设置容器高度为视口高度
        width: "100vw", // 设置容器宽度为视口宽度
        backgroundImage: `url('/wallhaven-wem6mp.png')`, // 设置背景图片
        backgroundSize: "cover", // 使用 cover 使图像填满容器并保持比例
        backgroundRepeat: "no-repeat", // 不重复背景图像
        backgroundPosition: "center", // 背景图像居中
        display: "flex", // 使用 Flexbox 布局
        flexDirection: "column", // 垂直排列子元素
        justifyContent: "center", // 居中对齐内容
        alignItems: "center", // 水平居中对齐内容
        color: "white", // 设置字体颜色为白色
        overflow: "hidden", // 隐藏超出边界的内容
      }}
    >
      <Button
        variant="contained"
        size="large"
        sx={{
          width: "200px",
          height: "60px",
          fontSize: "1.2rem",
        }}
        onClick={() => navigate("/Test")} // 点击按钮时跳转到 /Test
      >
        スタート
      </Button>
      <Button
        variant="contained"
        size="large"
        sx={{
          width: "200px",
          height: "60px",
          fontSize: "1.2rem",
          marginTop: "20px",
        }}
      >
        問題を追加
      </Button>
    </Box>
  );
}

export default Home;
