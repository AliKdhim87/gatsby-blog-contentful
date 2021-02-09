import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Header, Segment } from "semantic-ui-react"

const Footer: React.FC = () => {
  const {
    site: {
      siteMetadata: { author },
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
      attached
      style={{ marginTop: "1rem" }}
    >
      <Header as="p" textAlign="center" size="tiny">
        Created by {author} | ©{new Date().getFullYear()}
      </Header>
    </Segment>
  )
}

export default Footer
