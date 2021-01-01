import { DefaultTheme } from "styled-components"

export const theme: DefaultTheme = {
  justifyContent: "",
  colors: {
    background: "#F3F4F5",
    blue: "#0E6EB8",
    grey: '#2c2c2c',
    black: "#000",
    white: "#FCFCFC",
    aliceBlue:'#CEDEF3',
    glaucous: '#6483AA',
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
    },
    warning: {
      light: "#ffb74d",
      main: "#ff9800",
      dark: "#f57c00",
    },
    info: {
      light: "#64b5f6",
      main: "#2196f3",
      dark: "#1976d2",
    },
    success: {
      light: "#81c784",
      main: "#4caf50",
      dark: "#388e3c",
    },
  },
  breakpoint: {
    mobile:  '767px '
  }
}
