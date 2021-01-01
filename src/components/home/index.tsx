import React from "react"
import styled from "styled-components"
import Typist from "react-typist"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Container, Header, Icon, Segment } from "semantic-ui-react"

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 1rem;
  }
`

const Home: React.FC = () => {
  const { contentfulAsset, site } = useStaticQuery(graphql`
    query {
      contentfulAsset(title: { eq: "Home photo" }) {
        title
        fixed(width: 200) {
          ...GatsbyContentfulFixed
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <>
      <HomeContainer>
        <Container text>
          <Img
            fixed={contentfulAsset.fixed}
            style={{ borderRadius: "50%", display: "block", margin: "auto" }}
          />
          <Header as="h1" size="large" textAlign="center">
            <Typist>
              <Header as="span"> Hi, I'm </Header>
              <Header as="span" color="blue">
                {site.siteMetadata.author}
              </Header>
            </Typist>
          </Header>
          <Header as="p" textAlign="center" size="medium">
            I am a full-stack web developer. I can provide clean code and pixel
            perfect design. I also make website more & more interactive with web
            animations.
          </Header>
          <Segment basic textAlign="center">
            <a
              href="https://www.linkedin.com/in/ali-amouri-kadhim-082b75189/"
              target="_blank"
              rel="noopener"
            >
              <Icon
                color="blue"
                name="linkedin"
                size="huge"
                aria-label="linkedin"
              />
            </a>
            <a
              href="https://github.com/AliKdhim87"
              target="_blank"
              rel="noopener"
            >
              <Icon
                color="blue"
                name="github square"
                size="huge"
                aria-label="github"
              />
            </a>
          </Segment>
        </Container>
      </HomeContainer>
    </>
  )
}
export default Home
