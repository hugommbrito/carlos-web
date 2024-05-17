import { useMediaQuery } from "@mui/material";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export default function MainHeader() {
  const isMobile = useMediaQuery('(max-width:900px)');

  return (
    <>{isMobile ? <HeaderMobile /> : <HeaderDesktop />}
    </>
  )
}
