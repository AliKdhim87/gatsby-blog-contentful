import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import Particles from "react-tsparticles"

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
  }
  p code {
    // background-color: #e4e6e8;
    // background-color: #000;
    border-radius: 3px;
    padding: 2px 4px;
    color: ${({ theme }) => theme.colors.orange};
  }
  p {
    line-height: 2;
    color: ${({ theme }) => theme.colors.white};
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
      <GlobalStyle />
      <Wrapper>
        <Particles
          style={{ position: "absolute", width: "100%", height: "100%" }}
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "#000",
              },
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
        <Header />
        <Container as="main">{children}</Container>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  )
}

export default Layout
