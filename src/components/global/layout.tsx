import React, { useState, useEffect } from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import storage from "local-storage-fallback"

import { Container } from "semantic-ui-react"

import Footer from "./footer"
import Header from "./header"
import ParticlesBackground from "./ParticlesBackground"

import { darkMode } from "utils/darkMode"
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
  }
  code {
    background-color: rgb(30, 30, 30);
    border-radius: 3px;
    position: relative;
    display: inline-block;
    font-size: 0.9em;
    letter-spacing: -0.5px;
    padding: 2px 6px;
    margin: 1px 0px;
    color: ${({ theme }) =>
      darkMode(theme.mode) ? theme.colors.orange : theme.colors.grey};
  }
  p {
    line-height: 2;
    color: ${({ theme }) =>
      darkMode(theme.mode) ? theme.colors.grey : theme.colors.black};
     font-size: 1.1rem;
  }
  h1, h2, h3, h4, li {
    color: ${({ theme }) =>
      darkMode(theme.mode) ? theme.colors.grey : theme.colors.black}; 
  }
  img {
    width:100%;
  }
  .inverted {
    color:${({ theme }) =>
      darkMode(theme.mode) ? theme.colors.white : theme.colors.black} !important
  }import ParticlesBackground from './ParticlesBackground';

`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Layout: React.FC<Props> = ({ children }: Props) => {
  if (typeof window == "undefined") return null
  const mql = window.matchMedia("(prefers-color-scheme: dark)")

  const [mode, setMode] = useState(getInitialTheme)
  function getInitialTheme() {
    const savedTheme = storage.getItem("theme")
    if (!savedTheme && mql.matches) return "dark"
    return savedTheme ? savedTheme : "light"
  }
  useEffect(() => {
    storage.setItem("theme", mode)
  }, [mode])

  return (
    <ThemeProvider
      theme={{
        setMode,
        justifyContent: "",
        mode,
        colors: {
          background: "#F3F4F5",
          blue: "#0E6EB8",
          red: "#FF546D",
          grey: "#f8f9fa",
          black: "#000",
          white: "#FCFCFC",
          orange: "#FFAA50",
        },
        breakpoint: {
          mobile: "767px ",
        },
      }}
    >
      <GlobalStyle />
      <Wrapper>
        <ParticlesBackground />
        <Header />
        <Container as="main">{children}</Container>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  )
}

export default Layout
