import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import {useTheme} from 'styled-components'

import {Container, Header} from 'semantic-ui-react'

import {HomeContainer} from './HomeContainer'
import SocialMediaIcon from './SocialMediaIcon'

const Home: React.FC = () => {
  const {secondary, isDark} = useTheme()

  const {contentfulAsset, site} = useStaticQuery(graphql`
    query {
      contentfulAsset(title: {eq: "Home photo"}) {
        title
        gatsbyImageData(width: 200, layout: CONSTRAINED)
      }
      site {
        siteMetadata {
          author
          description
        }
      }
    }
  `)

  const image = getImage(contentfulAsset)

  return (
    <HomeContainer>
      <Container text textAlign="center">
        {image && <GatsbyImage image={image} alt={contentfulAsset.title} />}
        <Header as="h1" size="large">
          <Header as="span" style={{color: secondary}}>
            Hi, I am{' '}
          </Header>
          <Header as="span" inverted={isDark}>
            {site.siteMetadata.author}
          </Header>
        </Header>
        <Header as="span" size="tiny" inverted={isDark}>
          {site.siteMetadata.description}
        </Header>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <SocialMediaIcon
            href="https://www.linkedin.com/in/ali-amouri-kadhim-082b75189/"
            secondary
            name="linkedin square"
            aria-label="linkedin"
          />
          <SocialMediaIcon
            href="https://github.com/AliKdhim87"
            secondary
            name="github square"
            aria-label="github"
          />
        </div>
      </Container>
    </HomeContainer>
  )
}
export default Home
