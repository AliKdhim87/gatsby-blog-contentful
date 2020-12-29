import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"

import Footer from "./footer"
import Header from "./header"

import { theme } from "theme"

interface Props {
  title: string
  children: any
}
const GlobalStyle = createGlobalStyle`
html{
  overflow-x: hidden;
}
  main {
    flex:1;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.white};
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  )
}

export default Layout
