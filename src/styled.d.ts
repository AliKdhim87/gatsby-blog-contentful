import 'styled-components'
declare module 'styled-components' {
  export interface DefaultTheme {
    baseColor?: string
    isDark?: boolean
    textColor: string
    secondary: string
    primary: string
    mainBg: string
    mainBgDark: string
    justifyContent?: string
    palette: Palette
    breakpoint: {
      mobile: string
    }
  }
}

export interface Palette {
  background: string
  blue: string
  black: string
  white: string
  grey: string
  red: string
  orange: string
  darkBlack: string
}
