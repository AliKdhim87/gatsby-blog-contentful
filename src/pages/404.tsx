import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import styled from "styled-components"

import SEO from "components/global/SEO"
import Background from "components/generic/Background"
import { Button, Header } from "semantic-ui-react"

const StyledInnerWrapper = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  top: 20%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const NotFound: React.FC = () => {
  const { placeholderImage } = useStaticQuery(graphql`
    query headerBackgroundQuery {
      placeholderImage: file(relativePath: { eq: "images/49339.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Background fluid={placeholderImage.childImageSharp.fluid}>
      <SEO title="Not found" />
      <StyledInnerWrapper>
        <Button as={Link} to="/">
          Head home
        </Button>
        <Header as="a" href="http://www.freepik.com" inverted size="tiny">
          Designed by macrovector / Freepik
        </Header>
      </StyledInnerWrapper>
    </Background>
  )
}

export default NotFound
