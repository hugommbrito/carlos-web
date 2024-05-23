import { Box, Typography } from "@mui/material";
import React from "react";
import { teko } from "@/ultils/fonts";
const cupomStyle = {
  width: "100%",
  overflow: "hidden",
  boxSizing: "border-box",
  padding: "0.5rem",
  backgroundColor: "#CCFD5D",
  position: "relative",
};
const CupomContent = () => {
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
        NETSHOES COM DESCONTO ESPECIAL NESTE FIM DE SEMANA, USE O CUPOM
        CARLOSFERREIRA
      </Typography>
    </React.Fragment>
  );
};
export const CupomBanner = () => {
  return (
    <Box sx={cupomStyle}>
      <Box>
        <CupomContent />{" "}
      </Box>
    </Box>
  );
};
