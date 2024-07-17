import { Box, Typography } from "@mui/material";
import React, { ReactElement } from "react";
import { teko } from "@/ultils/fonts";
const cupomStyle = {
  width: "100%",
  overflow: "hidden",
  boxSizing: "border-box",
  padding: "0.5rem",
  backgroundColor: "#CCFD5D",
  position: "relative",
};

interface CupomProps {
  insideText: string
}

const CupomContent: React.FC<CupomProps> = ({insideText}) => {
  return (
    <React.Fragment>
      <Typography
        className={teko.className}
        variant="h4"
        component="p"
        sx={{
          color: "#1D1E1E",
          fontSize: "26px",
          "@media (max-width:912px)": {
            fontSize: "16px",
          },
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {insideText}
        
      </Typography>
    </React.Fragment>
  );
};

interface BannerProps extends CupomProps {}

export const CupomBanner: React.FC<BannerProps> = ({insideText}) => {
  return (
    <Box sx={cupomStyle}>
      <Box>
        <CupomContent insideText={insideText.toUpperCase()}/>
      </Box>
    </Box>
  );
};
