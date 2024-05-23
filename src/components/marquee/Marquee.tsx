/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Typography, Box } from "@mui/material";
import { teko } from "@/ultils/fonts";

const marqueeStyle = {
  width: "100%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  boxSizing: "border-box",
  padding: "0.5rem",
  backgroundColor: "#DBDBDB",
  position: "relative",
};

const MarqueeContent = () => (
  <React.Fragment>
    <Typography
      className={teko.className}
      variant="h4"
      component="div"
      sx={{
        color: "#1D1E1E",
        fontSize: "26px",
        fontWeight: "bold",
        display: "inline",
      }}
    >
      ACESSE NOSSA PLATAFORMA E ENCONTRE CONTEÚDOS INCRÍVEIS
      <Typography
        variant="subtitle1"
        sx={{
          color: "#A3FB22",
          display: "inline",
          fontSize: "26px",
          fontWeight: "bold",
        }}
      >
        {" "}
        //{" "}
      </Typography>
    </Typography>
    <Typography
      className={teko.className}
      variant="h4"
      component="div"
      sx={{
        color: "#1D1E1E",
        fontSize: "26px",
        fontWeight: "bold",
        display: "inline",
      }}
    >
      ACESSE NOSSA PLATAFORMA E ENCONTRE CONTEÚDOS INCRÍVEIS
      <Typography
        variant="subtitle1"
        sx={{
          color: "#A3FB22",
          display: "inline",
          fontSize: "26px",
          fontWeight: "bold",
        }}
      >
        {" "}
        //{" "}
      </Typography>
    </Typography>
  </React.Fragment>
);
const textAnimation = {
  display: "inline-block",
  animation: "marquee 10s linear infinite",
};

const Marquee = () => (
  <Box sx={marqueeStyle}>
    <Box
      sx={{
        ...textAnimation,
        "@keyframes marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        whiteSpace: "nowrap",
      }}
    >
      <MarqueeContent />
      <MarqueeContent /> {/*Duplicate content for seamless looping*/}
    </Box>
  </Box>
);

export default Marquee;
