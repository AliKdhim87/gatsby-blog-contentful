import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {useTheme} from 'styled-components'

import {Segment, Header} from 'semantic-ui-react'

const Footer: React.FC = () => {
  const {isDark} = useTheme()
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
      style={{marginTop: '1rem'}}
      inverted={isDark}
    >
      <Header as="p" textAlign="center" size="tiny" inverted={isDark}>
        Created by {author} | ©{new Date().getFullYear()}
      </Header>
    </Segment>
  )
}

export default Footer
