import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import {useTheme} from 'styled-components'
import {Animated} from 'react-animated-css'

import {Container, Header, Icon} from 'semantic-ui-react'

import {HomeContainer} from './HomeContainer'

const Home: React.FC = () => {
  const {secondary, isDark} = useTheme()
  const {contentfulAsset, site} = useStaticQuery(graphql`
    query {
      contentfulAsset(title: {eq: "Home photo"}) {
        title
        fluid(maxWidth: 700) {
          ...GatsbyContentfulFluid_withWebp
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
          <Animated
            animationIn="bounceInDown"
            animationOut="rollIn"
            animationInDuration={1000}
            animationOutDuration={1000}
            isVisible
            style={{width: '200px', height: '200px', margin: 'auto'}}
          >
            <Img fluid={contentfulAsset.fluid} imgStyle={{borderRadius: '50%'}} />
          </Animated>
          <Header as="h1" size="large">
            <Animated
              isVisible
              animationIn="slideInRight"
              animationOut="slideOutLeft"
              animationInDuration={1000}
              animationOutDuration={1000}
            >
              <Header as="span" style={{color: secondary}}>
                Hi, I am{' '}
              </Header>
            </Animated>
            <Animated
              isVisible
              animationIn="slideInLeft"
              animationOut="slideOutRight"
              animationInDuration={1000}
              animationOutDuration={1000}
            >
              <Header as="span" inverted={isDark}>
                {site.siteMetadata.author}
              </Header>
            </Animated>
          </Header>
          <Header as="span" size="tiny" inverted={isDark}>
            {site.siteMetadata.description}
          </Header>

          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Animated
              isVisible
              animationIn="slideInLeft"
              animationOut="tada"
              animationInDuration={1000}
              animationOutDuration={1000}
            >
              <a
                href="https://www.linkedin.com/in/ali-amouri-kadhim-082b75189/"
                target="_blank"
                rel="noreferrer"
                style={{color: secondary, fontSize: '3.5rem'}}
              >
                <Icon name="linkedin square" aria-label="linkedin" />
              </a>
            </Animated>
            <Animated
              isVisible
              animationIn="slideInRight"
              animationOut="tada"
              animationInDuration={1000}
              animationOutDuration={1000}
            >
              <a
                href="https://github.com/AliKdhim87"
                target="_blank"
                rel="noreferrer"
                style={{color: secondary, fontSize: '3.5rem'}}
              >
                <Icon name="github square" aria-label="github" />
              </a>
            </Animated>
          </div>
        </Container>
      </HomeContainer>
    </>
  )
}
export default Home
