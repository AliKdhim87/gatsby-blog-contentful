import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import { Header } from "semantic-ui-react"

const StyledFooter = styled.footer`
  position: absolute;
  bottom: auto;
  width: 100%;
  height: 65px;
  background: ${({ theme }) => theme.colors.blue};
  display: flex;
  align-items: center;
  justify-content: center;
`

const Footer: React.FC = () => {
  const {
    site: {
      siteMetadata: { author },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <StyledFooter>
      <Header as="p" inverted textAlign="center" size="small">
        Created by {author}, ©{new Date().getFullYear()}
      </Header>
    </StyledFooter>
  )
}

export default Footer
