import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import Typist from "react-typist"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Particles from "react-particles-js"

import { Container, Header, Icon } from "semantic-ui-react"

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

const SocialMediaHolder = styled.div`
  display: flex;
  justify-content: center;
`

const StyledIcon = styled(Icon)`
  transition: 0.3s;
  &.inverted.icon:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`

const IndexPage: React.FC = () => {
  const { colors } = useContext(ThemeContext)

  const { contentfulAsset } = useStaticQuery(graphql`
    query GetMyPhoto {
      contentfulAsset(title: { eq: "Home photo" }) {
        title
        fixed(width: 200) {
          ...GatsbyContentfulFixed
        }
      }
    }
  `)

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
          <Container text>
            <Img
              fixed={contentfulAsset.fixed}
              style={{ borderRadius: "50%", display: "block", margin: "auto" }}
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
              I am a full-stack web developer. I can provide clean code and
              pixel perfect design. I also make website more & more interactive
              with web animations.
            </Header>
            <SocialMediaHolder>
              <a
                href="https://www.linkedin.com/in/ali-amouri-kadhim-082b75189/"
                target="_blank"
              >
                <StyledIcon
                  name="linkedin"
                  size="huge"
                  inverted
                  aria-label="linkedin"
                />
              </a>
              <a href="https://github.com/AliKdhim87" target="_blank">
                <StyledIcon
                  name="github square"
                  size="huge"
                  inverted
                  aria-label="github"
                />
              </a>
            </SocialMediaHolder>
          </Container>
        </HomeContainer>
      </>
    </>
  )
}
export default IndexPage
