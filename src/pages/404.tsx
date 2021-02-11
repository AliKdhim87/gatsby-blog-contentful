import React from "react"
import { Link } from "gatsby"
import styled, { useTheme } from "styled-components"
import { Button, Header } from "semantic-ui-react"

import SEO from "components/global/SEO"

import { NotFoundIcon } from "svg-icons"
import { darkMode } from "utils/darkMode"

const NotFoundPageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const NotFound: React.FC = () => {
  const { mode } = useTheme()
  return (
    <>
      <SEO title="Not found" />

      <NotFoundPageContainer>
        <NotFoundIcon aria-label="page is not found" />
        <Header as="h1" size="huge" color={darkMode(mode) ? "grey" : "black"}>
          OOPS!
        </Header>
        <Header as="h4" size="medium" color={darkMode(mode) ? "grey" : "black"}>
          Page not found
        </Header>
        <Button as={Link} to="/" color="red" size="large">
          Head home
        </Button>
      </NotFoundPageContainer>
    </>
  )
}

export default NotFound
