import 'styled-components'
declare module 'styled-components' {
  export interface DefaultTheme {
    setMode: React.Dispatch<React.SetStateAction<string>>
    justifyContent?: string
    mode?: string | undefined
    colors: {
      background: string
      blue: string
      black: string
      white: string
      grey: string
      red: string
      orange: string
    }
    breakpoint: {
      mobile: string
    }
  }
}
