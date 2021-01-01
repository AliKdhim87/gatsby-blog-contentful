import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Container, Grid, List, Segment } from "semantic-ui-react"

import MainTitle from "components/generic/MainTitle"

const AboutMeComponent: React.FC = () => {
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
      contentfulAsset(title: { eq: "Home photo" }) {
        title
        fluid(maxWidth: 600) {
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
    <>
      <Container style={{ marginBottom: "2rem" }}>
        <Segment basic padded size="massive">
          <MainTitle text="About me" borderBottomWidth="60px" />
        </Segment>
        <Segment secondary padded basic>
          <Grid>
            <Grid.Column computer={6} mobile={16}>
              <Img fluid={contentfulAsset.fluid} alt={contentfulAsset.title} />
            </Grid.Column>
            <Grid.Column computer={10} mobile={16}>
              <Segment as="h2" basic size="massive" textAlign="center">
                I'm {author}
              </Segment>
              <Segment as="p" basic size="large">
                {aboutMe}
              </Segment>
            </Grid.Column>
          </Grid>
          <Segment basic padded>
            <MainTitle text="Skills" borderBottomWidth="40px" />
          </Segment>
          <Grid container centered celled>
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
    </>
  )
}

export default AboutMeComponent
