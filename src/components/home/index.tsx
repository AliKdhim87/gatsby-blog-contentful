import React from "react"
import styled, { useTheme } from "styled-components"
import Typist from "react-typist"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Container, Header, Segment } from "semantic-ui-react"

import {
  GithubIcon,
  LinkedinIcon,
  LinkedinIconRed,
  GithubIconRed,
} from "svg-icons"

import { darkMode } from "utils/darkMode"

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
  const { mode } = useTheme()
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
          description
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
            <Typist key={mode}>
              <Header as="span" color={darkMode(mode) ? "orange" : "red"}>
                Hi, I'm{" "}
              </Header>
              <Header as="span" inverted>
                {site.siteMetadata.author}
              </Header>
            </Typist>
          </Header>
          <Header inverted as="p" textAlign="center" size="small">
            {site.siteMetadata.description}
          </Header>
          <Segment basic textAlign="center">
            <a
              href="https://www.linkedin.com/in/ali-amouri-kadhim-082b75189/"
              target="_blank"
              rel="noopener"
              style={{ marginRight: "1rem" }}
            >
              {darkMode(mode) ? (
                <LinkedinIcon aria-label="linkedin" />
              ) : (
                <LinkedinIconRed aria-label="linkedin" />
              )}
            </a>
            <a
              href="https://github.com/AliKdhim87"
              target="_blank"
              rel="noopener"
            >
              {darkMode(mode) ? (
                <GithubIcon aria-label="github" />
              ) : (
                <GithubIconRed aria-label="github" />
              )}
            </a>
          </Segment>
        </Container>
      </HomeContainer>
    </>
  )
}
export default Home
