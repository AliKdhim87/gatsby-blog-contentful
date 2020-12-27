import "styled-components"
import { theme } from "theme"

declare module "styled-components" {
  export interface DefaultTheme {
    justifyContent?: string
    colors: {
      background: string
      blue: string
      black: string
      white: string
      error: {
        light: string
        main: string
        dark: string
      }
      warning: {
        light: string
        main: string
        dark: string
      }
      info: {
        light: string
        main: string
        dark: string
      }
      success: {
        light: string
        main: string
        dark: string
      }
    }
  }
}
