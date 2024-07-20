'use client'

import { createTheme } from "@mui/material/styles";
import { teko } from "./fonts";
import { Teko } from "next/font/google";

export const theme = createTheme({
  typography: {
    fontFamily: ['Kanit', 'Teko'].join(',')
  },
  card: {
    fontFamily: ['Kanit', 'Teko'].join(',')
  },
  palette: {
    primary: {
      main: "#1D1E1E",
      // dark: "#1D1E1E",
      // light: "#1D1E1E",
      contrastText: "#CCFD5D"
    },
    secondary: {
      main: "#DBDBDB"
    },
    background: {
      default: "#EDEDED"
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {

        root: {
          backgroundColor: '#1D1E1E',
          ':hover': {
            color: '#1D1E1E'
          }
        },
      }
    }
  }
}); 
