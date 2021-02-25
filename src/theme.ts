import {DefaultTheme} from 'styled-components'

export enum ColorPalette {
  background = '#F3F4F5',
  blue = '#0E6EB8',
  red = '#FF546D',
  grey = '#f8f9fa',
  black = '#1B1C1D',
  white = '#FCFCFC',
  orange = '#FFAA50',
  darkBlack = '#000',
}

const baseTheme = {
  breakpoint: {
    mobile: '767px',
  },
  palette: {
    background: ColorPalette.background,
    blue: ColorPalette.blue,
    red: ColorPalette.red,
    grey: ColorPalette.grey,
    black: ColorPalette.black,
    white: ColorPalette.white,
    orange: ColorPalette.orange,
    darkBlack: ColorPalette.darkBlack,
  },
}

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  textColor: ColorPalette.black,
  mainBg: ColorPalette.grey,
  secondary: ColorPalette.red,
  primary: ColorPalette.red,
  mainBgDark: ColorPalette.grey,
}
export const darkTheme: DefaultTheme = {
  ...baseTheme,
  textColor: ColorPalette.grey,
  mainBg: ColorPalette.black,
  secondary: ColorPalette.orange,
  primary: ColorPalette.orange,
  mainBgDark: ColorPalette.darkBlack,
}
