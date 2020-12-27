import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"

import Footer from "./footer"
import Header from "./header"
import Head from "./head"

import { theme } from "theme"

interface Props {
  title: string
  children: any
}
const GlobalStyle = createGlobalStyle`
  body {
   position: relative
  }
  main {
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: calc(100vh - 65px - 70.28px);
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.white};

  }
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
      <GlobalStyle />
      <Head title={getTitle()} />
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
