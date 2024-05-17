'use client'

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  // typography: {
  //   fontFamily: ['Kanit', 'Teko'].join(',')
  // },
  palette: {
    primary: {
      main: "#1D1E1E",
      dark: "#1D1E1E",
      light: "#1D1E1E",
      contrastText: "#CCFD5D"
    },
    secondary: {
      main: "#DBDBDB"
    },
    // background: {
    //   default: "#EDEDED"
    // }
  },
  components: {
    MuiButton: {
      styleOverrides: {

        root: {
          backgroundColor: '#1D1E1E',
        },
      }
    }
  }
}); 
