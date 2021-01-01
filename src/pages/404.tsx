import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Button, Header, Icon, Segment } from "semantic-ui-react"

import SEO from "components/global/SEO"

const NotFoundPageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const NotFoundTitle = styled.h1`
  font-size: 6rem;
  color: ${({ theme }) => theme.colors.grey};
`

const NotFound: React.FC = () => {
  return (
    <>
      <SEO title="Not found" />

      <NotFoundPageContainer>
        <Segment placeholder padded basic>
          <Icon
            name="exclamation triangle"
            size="massive"
            color="blue"
            aria-label="page is not found"
          />
          <NotFoundTitle>404</NotFoundTitle>
        </Segment>
        <Header as="h2" color="grey">
          Sorry, This page is not found.
        </Header>

        <Button as={Link} to="/" color="blue" active size="large">
          Head home
        </Button>
      </NotFoundPageContainer>
    </>
  )
}

export default NotFound
