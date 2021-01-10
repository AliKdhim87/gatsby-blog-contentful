import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"

import Footer from "./footer"
import Header from "./header"

import { theme } from "theme"
import { Container } from "semantic-ui-react"

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
    color: ${({ theme }) => theme.colors.white};
    position: relative;
    background:${({ theme }) => theme.colors.background};
  }
  p code {
    background-color: #e4e6e8;
    border-radius: 3px;
    padding: 2px 4px;
  }
  p {
    line-height: 2;
    color: ${({ theme }) => theme.colors.grey};
     font-size: 1.1rem;
  }
  img {
    width:100%;
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
        <Container as="main">{children}</Container>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  )
}

export default Layout
