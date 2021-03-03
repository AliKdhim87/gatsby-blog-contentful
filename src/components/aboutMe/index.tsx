import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import {useTheme} from 'styled-components'

import {Grid, Header, List, Segment} from 'semantic-ui-react'

import MainTitle from 'components/generic/MainTitle'

const AboutMeComponent: React.FC = () => {
  const {isDark} = useTheme()
  const {
    contentfulAsset,
    site: {
      siteMetadata: {author},
    },
    contentfulSkills: {
      skillsItem: {skills1, skills2, skills3, aboutMe},
    },
  } = useStaticQuery(graphql`
    query {
      contentfulAsset(title: {eq: "my-image-about"}) {
        title
        fluid(maxWidth: 700) {
          ...GatsbyContentfulFluid_withWebp
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
    <Segment inverted={isDark}>
      <MainTitle text="About me" border="60px" />
      <Grid>
        <Grid.Column computer={6} mobile={16}>
          <Img
            fluid={contentfulAsset.fluid}
            alt={contentfulAsset.title}
            style={{height: '500px'}}
          />
        </Grid.Column>
        <Grid.Column computer={10} mobile={16}>
          <Header as="h2" size="large" textAlign="center" inverted={isDark}>
            I am {author}
          </Header>
          <Header
            as="p"
            size="small"
            inverted={isDark}
            style={{padding: '1rem 3rem', lineHeight: 1.75}}
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
  )
}

export default AboutMeComponent
