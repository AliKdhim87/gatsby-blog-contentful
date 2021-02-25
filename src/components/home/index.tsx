import React from 'react'
import Typist from 'react-typist'
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
        <Container text textAlign="center">
          <Img
            fixed={contentfulAsset.fixed}
            style={{borderRadius: '50%', display: 'block', margin: 'auto'}}
          />
          <Header as="h1" size="large" style={{height: '50px'}}>
            <Typist key={secondary}>
              <Header as="span" style={{color: secondary}}>
                Hi, I am{' '}
              </Header>
              <Header as="span" inverted={isDark}>
                {site.siteMetadata.author}
              </Header>
            </Typist>
          </Header>
          <Header as="h3" size="tiny" inverted={isDark}>
            {site.siteMetadata.description}
          </Header>
          <>
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
          </>
        </Container>
      </HomeContainer>
    </>
  )
}
export default Home
