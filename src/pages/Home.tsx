import React from "react";
import { Box, Typography } from "@mui/material"; // 导入 MUI 组件

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        padding: 2,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography
        variant="h4"
        component="span"
        color="primary"
        sx={{ fontWeight: "bold" }}
      >
        test
      </Typography>
    </Box>
  );
}

export default Home;
