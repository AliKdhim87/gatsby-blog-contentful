import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {useTheme} from 'styled-components'

import {Header, Segment} from 'semantic-ui-react'
import {darkMode} from 'utils/darkMode'

const Footer: React.FC = () => {
  const {mode} = useTheme()
  const {
    site: {
      siteMetadata: {author},
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <Segment
      as="footer"
      size="large"
      textAlign="center"
      inverted
      color={darkMode(mode) ? 'black' : 'grey'}
      style={{marginTop: '1rem'}}
    >
      <Header as="p" textAlign="center" size="tiny" inverted>
        Created by {author} | ©{new Date().getFullYear()}
      </Header>
    </Segment>
  )
}

export default Footer
