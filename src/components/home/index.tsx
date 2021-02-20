import React from 'react'
import {useTheme} from 'styled-components'
import Typist from 'react-typist'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'

import {Container, Header, Segment} from 'semantic-ui-react'

import {GithubIcon, LinkedinIcon, LinkedinIconRed, GithubIconRed} from 'svg-icons'
import {darkMode} from 'utils/darkMode'

import {HomeContainer} from './HomeContainer'

const Home: React.FC = () => {
  const {mode} = useTheme()
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
        <Container text>
          <Img
            fixed={contentfulAsset.fixed}
            style={{borderRadius: '50%', display: 'block', margin: 'auto'}}
          />
          <Header as="h1" size="large" textAlign="center">
            <Typist key={mode}>
              <Header as="span" color={darkMode(mode) ? 'orange' : 'red'}>
                Hi, I am{' '}
              </Header>
              <Header as="span" inverted>
                {site.siteMetadata.author}
              </Header>
            </Typist>
          </Header>
          <Header inverted as="p" textAlign="center" size="small">
            {site.siteMetadata.description}
          </Header>
          <Segment basic textAlign="center">
            <a
              href="https://www.linkedin.com/in/ali-amouri-kadhim-082b75189/"
              target="_blank"
              rel="noreferrer"
              style={{marginRight: '1rem'}}
            >
              {darkMode(mode) ? (
                <LinkedinIcon aria-label="linkedin" />
              ) : (
                <LinkedinIconRed aria-label="linkedin" />
              )}
            </a>
            <a href="https://github.com/AliKdhim87" target="_blank" rel="noreferrer">
              {darkMode(mode) ? (
                <GithubIcon aria-label="github" />
              ) : (
                <GithubIconRed aria-label="github" />
              )}
            </a>
          </Segment>
        </Container>
      </HomeContainer>
    </>
  )
}
export default Home
