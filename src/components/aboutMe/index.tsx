import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { Container, Grid, Header } from "semantic-ui-react"

const AboutMeDescription = styled.p`
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.white};
`

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
                  I'm {author}
                </Header>
                <AboutMeDescription>{aboutMe}</AboutMeDescription>
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
              {skills1 &&
                skills1.map((skill: string, index: number) => (
                  <Header inverted key={index}>
                    {skill}
                  </Header>
                ))}
            </Grid.Column>
            <Grid.Column computer={5} tablet={16} mobile={16}>
              {skills2 &&
                skills2.map((skill: string, index: number) => (
                  <Header inverted key={index}>
                    {skill}
                  </Header>
                ))}
            </Grid.Column>
            <Grid.Column computer={5} tablet={16} mobile={16}>
              {skills3 &&
                skills3.map((skill: string, index: number) => (
                  <Header inverted key={index}>
                    {skill}
                  </Header>
                ))}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  )
}

export default AboutMeComponent
