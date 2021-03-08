import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {useTheme} from 'styled-components'

import {Segment, Header} from 'semantic-ui-react'

interface Props {
  author: string
  color: string
}

const Footer: React.FC = () => {
  const {textColor} = useTheme()
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

  return <PureFooter color={textColor} author={author} />
}

export default Footer

export const PureFooter: React.FC<Props> = ({author, color}: Props) => {
  return (
    <Segment
      as="footer"
      size="large"
      textAlign="center"
      style={{marginTop: '1rem'}}
      inverted
      attached
    >
      <Header as="p" textAlign="center" size="tiny" style={{color}}>
        Created by {author} | ©{new Date().getFullYear()}
      </Header>
    </Segment>
  )
}
