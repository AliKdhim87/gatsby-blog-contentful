import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"

import Footer from "./footer"
import Header from "./header"
import Head from "./head"

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
  const getTitle = () => {
    if (children.key === "/") {
      return "Home"
    } else if (children.key === "/blog/") {
      return "Blog"
    } else if (children.key === "/contact/") {
      return "Contact"
    } else if (children.key === "/about/") {
      return "About"
    } else if (children.key === "/404.html") {
      return "Not found"
    } else if (children.props.pathContext) {
      return children.props.pathContext.slug
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />
        <Head title={getTitle()} />
        <Header />
        <main>{children}</main>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  )
}

export default Layout
