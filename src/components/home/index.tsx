import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import {useTheme} from 'styled-components'

import {Container, Header, Icon} from 'semantic-ui-react'

import {HomeContainer} from './HomeContainer'

const Home: React.FC = () => {
  const {secondary, isDark} = useTheme()
  const {contentfulAsset, site} = useStaticQuery(graphql`
    query {
      contentfulAsset(title: {eq: "Home photo"}) {
        title
        fluid(maxWidth: 700) {
          ...GatsbyContentfulFluid
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
        <Container text textAlign="center">
          <div style={{width: '200px', height: '200px', margin: 'auto'}}>
            <Img fluid={contentfulAsset.fluid} imgStyle={{borderRadius: '50%'}} />
          </div>
          <Header as="h1" size="large">
            <Header as="span" style={{color: secondary}}>
              Hi, I am{' '}
            </Header>
            <Header as="span" inverted={isDark}>
              {site.siteMetadata.author}
            </Header>
          </Header>
          <Header as="h3" size="tiny" inverted={isDark}>
            {site.siteMetadata.description}
          </Header>

          <div>
            <a
              href="https://www.linkedin.com/in/ali-amouri-kadhim-082b75189/"
              target="_blank"
              rel="noreferrer"
              style={{color: secondary, fontSize: '3.5rem'}}
            >
              <Icon name="linkedin square" aria-label="linkedin" />
            </a>
            <a
              href="https://github.com/AliKdhim87"
              target="_blank"
              rel="noreferrer"
              style={{color: secondary, fontSize: '3.5rem'}}
            >
              <Icon name="github square" aria-label="github" />
            </a>
          </div>
        </Container>
      </HomeContainer>
    </>
  )
}
export default Home
