"use client";
import { useMediaQuery } from "@mui/material";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import { HeaderProps } from "./interfaces";

export default function MainHeader({ isApp }: HeaderProps) {
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <>
      {isMobile ? (
        <HeaderMobile isApp={isApp} />
      ) : (
        <HeaderDesktop isApp={isApp} />
      )}
    </>
  );
}
