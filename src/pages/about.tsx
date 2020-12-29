import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { Container, Grid, Header } from "semantic-ui-react"

import SEO from "components/global/SEO"

const AboutMeDescription = styled.p`
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.white};
`

const About: React.FC = () => {
  const { contentfulAsset } = useStaticQuery(graphql`
    query {
      contentfulAsset(title: { eq: "Home photo" }) {
        title
        fluid(maxWidth: 600) {
          ...GatsbyContentfulFluid
        }
      }
    }
  `)

  // Todo get the text of this page from contentful api

  return (
    <>
      <SEO title="About" />
      <Header
        dividing
        textAlign="center"
        as="h1"
        size="huge"
        inverted
        style={{ padding: "2rem 0" }}
      >
        About me
      </Header>
      <Container fluid>
        <Grid doubling container>
          <Grid.Column computer={6} mobile={16}>
            <Img fluid={contentfulAsset.fluid} alt={contentfulAsset.title} />
          </Grid.Column>
          <Grid.Column computer={10} mobile={16}>
            <Header>
              <Header.Content>
                <Header
                  textAlign="center"
                  as="h2"
                  size="large"
                  dividing
                  inverted
                  style={{ padding: "2rem 0" }}
                >
                  I'm Ali Amouri Kadhim
                </Header>
                <AboutMeDescription>
                  I'm a Full-stack web developer. Currently, I'm working at XPAY
                  GROUP as a Full-Stack web developer. Innovative optimized
                  solution seeker. Excited to be at the deployment phase of my
                  new career as a web developer. I am ambitious, adventurous,
                  assiduous, animated, and alliteration advocate.
                </AboutMeDescription>
              </Header.Content>
            </Header>
          </Grid.Column>
        </Grid>

        <Grid container centered celled>
          <Grid.Column widescreen="16">
            <Header as="h3" size="huge" textAlign="center" inverted>
              Skills
            </Header>
          </Grid.Column>
          <Grid.Row>
            <Grid.Column computer={5} tablet={16} mobile={16}>
              <Header inverted> HTML</Header>
              <Header inverted> CSS</Header>
              <Header inverted> Javascript </Header>
              <Header inverted> Typescript </Header>
              <Header inverted> Restful api, Graphql </Header>
            </Grid.Column>
            <Grid.Column computer={5} tablet={16} mobile={16}>
              <Header inverted> React, Angular, jQuery</Header>
              <Header inverted>Redux, Apollo client, React Context API</Header>
              <Header inverted> Nodejs, Socket.io, ExpressJs</Header>
              <Header inverted> GIT/ Github/ Gitlab </Header>
              <Header inverted>styled components</Header>
            </Grid.Column>
            <Grid.Column computer={5} tablet={16} mobile={16}>
              <Header inverted>SQL, MongoDB</Header>
              <Header inverted> Bootstrap, Material-UI, Semantic-UI</Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  )
}

export default About
