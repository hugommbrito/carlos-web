"use client";

import { teko } from "@/ultils/fonts";
import { Box, Button, Link } from "@mui/material";

import * as React from "react";
import { HeaderProps } from "./interfaces";
import Image from "next/image";

interface NavItemProps {
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ label }) => {
  return (
    <Link
      sx={{ fontSize: "20px", textDecoration: "none", cursor: "pointer" }}
      className={teko.className}
    >
      {label.toUpperCase()}
    </Link>
  );
};

const navItems = [
  "store",
  "resultados",
  "equipe",
  "parceiros",
  "desafios",
  "planos",
  "consultoria",
];

const HeaderDesktop: React.FC<HeaderProps> = ({ isApp }: HeaderProps) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
      height={"100px"}
      paddingX={"32px"}
      boxSizing={"border-box"}
      bgcolor={"#EDEDED"}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        sx={{ width: "100%", maxWidth: "1140px", margin: "0 auto" }}
      >
        {isApp && (
          <Button
            id="fade-button"
            aria-haspopup="true"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "transparent",
              width: "max-content",
              height: "max-content",
            }}
          >
            <Image src="/Menu.svg" alt="Menu" width={32} height={32} />
          </Button>
        )}
        <Box
          className="auth-logo-npv"
          component={"img"}
          src={!isApp ? "/Logo.svg" : "/images/logoApp.png"}
          width="100px"
        />

        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          gap={"10px"}
        >
          {!isApp &&
            navItems.map((item) => <NavItem key={item} label={item} />)}
        </Box>
        {!isApp && (
          <Button
            className={teko.className}
            sx={{
              color: "#EDEDED",
              background: "#1D1E1E",
              ":disabled": {
                backgroundColor: "#DBDBDB",
                color: "#1D1E1E",
              },
              "& :hover": {
                backgroundColor: "#1D1E1E",
              },
              padding: "15px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "max-content",
              height: "50px",
              fontSize: "20px",
            }}
          >
            ACESSAR A PLATAFORMA
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default HeaderDesktop;
