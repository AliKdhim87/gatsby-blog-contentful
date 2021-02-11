import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { useTheme } from "styled-components"

import { Container, Grid, Header, List, Segment } from "semantic-ui-react"

import MainTitle from "components/generic/MainTitle"

import { darkMode } from "utils/darkMode"

const AboutMeComponent: React.FC = () => {
  const { mode } = useTheme()
  const {
    contentfulAsset,
    site: {
      siteMetadata: { author },
    },
    contentfulSkills: {
      skillsItem: { skills1, skills2, skills3, aboutMe },
    },
  } = useStaticQuery(graphql`
    query {
      contentfulAsset(title: { eq: "my-image-about" }) {
        title
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      contentfulSkills {
        skillsItem {
          skills1
          skills2
          skills3
          aboutMe
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
    <Container>
      <Segment padded inverted color={darkMode(mode) ? "black" : "grey"}>
        <MainTitle text="About me" border="60px" />
        <Grid>
          <Grid.Column computer={6} mobile={16}>
            <Img
              fluid={contentfulAsset.fluid}
              alt={contentfulAsset.title}
              style={{ height: "500px" }}
            />
          </Grid.Column>
          <Grid.Column computer={10} mobile={16}>
            <Header as="h2" size="huge" textAlign="center" inverted>
              I'm {author}
            </Header>
            <Header
              as="p"
              size="small"
              inverted
              style={{ padding: "1rem 3rem", lineHeight: 1.75 }}
            >
              {aboutMe}
            </Header>
          </Grid.Column>
        </Grid>
        <MainTitle text="Skills" border="40px" />
        <Grid container centered celled inverted>
          <Grid.Row>
            <Grid.Column computer={5} tablet={16} mobile={16}>
              <List bulleted divided items={skills1} size="huge" relaxed />
            </Grid.Column>
            <Grid.Column computer={5} tablet={16} mobile={16}>
              <List bulleted divided items={skills2} size="huge" relaxed />
            </Grid.Column>
            <Grid.Column computer={5} tablet={16} mobile={16}>
              <List bulleted divided items={skills3} size="huge" relaxed />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  )
}

export default AboutMeComponent
