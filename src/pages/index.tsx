import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import Typist from "react-typist"

import Particles from "react-particles-js"
import { Container, Header, Image } from "semantic-ui-react"

const HomeContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
`

const NameTitle = styled.span`
  color: ${({ theme }) => theme.colors.blue};
`

const IndexPage: React.FC = () => {
  const { colors } = useContext(ThemeContext)

  return (
    <>
      <Particles
        height="calc(100vh - 65px - 70.28px)"
        params={{
          background: {
            color: colors.background,
            opacity: 1,
            size: "cover",
          },
          autoPlay: true,
          particles: {
            number: {
              value: 200,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 1,
                opacity: 1,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />

      <>
        <HomeContainer>
          <Container>
            <Image
              src="https://unsplash.it/250"
              bordered
              centered
              circular
              size="small"
            />
            <Header
              as="h1"
              size="huge"
              textAlign="center"
              style={{ color: colors.white }}
            >
              <Typist>
                Hi, I am <NameTitle> Ali Amouri Kadhim</NameTitle>
              </Typist>
            </Header>
            <Header
              as="p"
              textAlign="center"
              style={{ color: colors.white }}
              size="small"
            >
              I am a frontend web developer. I can provide clean code and pixel
              perfect design. I also make website more & more interactive with
              web animations.
            </Header>
          </Container>
        </HomeContainer>
      </>
    </>
  )
}
export default IndexPage
