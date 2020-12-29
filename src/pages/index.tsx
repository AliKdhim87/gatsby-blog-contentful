import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import Typist from "react-typist"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Container, Header, Icon } from "semantic-ui-react"

import SEO from "components/global/SEO"

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 3;
  margin-top: 3rem;
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
      <SEO title="Home" />

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
            I am a full-stack web developer. I can provide clean code and pixel
            perfect design. I also make website more & more interactive with web
            animations.
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
  )
}
export default IndexPage
