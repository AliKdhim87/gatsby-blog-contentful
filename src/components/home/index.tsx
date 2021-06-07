import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import styled, {useTheme} from 'styled-components'

import {Container, Header} from 'semantic-ui-react'

import {HomeContainer} from './HomeContainer'
import SVGWrapper from 'components/generic/SVGWarper'
import {GithubIcon, LinkedinIcon} from 'svg-icons'

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  & a {
    color: inherit;
  }
`

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

        <SocialMediaContainer>
          <SVGWrapper size="52px" marginRight="25px">
            <a
              href="https://www.linkedin.com/in/ali-amouri-kadhim-082b75189/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon aria-label="linkedin page" />
            </a>
          </SVGWrapper>
          <SVGWrapper size="52px">
            <a href="https://github.com/AliKdhim87" target="_blank" rel="noreferrer">
              <GithubIcon aria-label="github page" />
            </a>
          </SVGWrapper>
        </SocialMediaContainer>
      </Container>
    </HomeContainer>
  )
}
export default Home
