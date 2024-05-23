import { CupomBanner } from "@/components/cupom/Cupom";
import MainHeader from "@/components/header/MainHeader";

import { Box } from "@mui/material";

export default function CursoPg() {
  return (
    <Box sx={{ width: "100%", margin: "0 auto", backgroundColor: "#EDEDED" }}>
      <MainHeader isApp={true} />
      <CupomBanner />
    </Box>
  );
}
