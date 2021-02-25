import React from 'react'
import {Link} from 'gatsby'
import styled, {useTheme} from 'styled-components'
import {Button, Header} from 'semantic-ui-react'

import SEO from 'components/global/SEO'

import {NotFoundIcon} from 'svg-icons'

const NotFoundPageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const NotFound: React.FC = () => {
  const {isDark} = useTheme()
  return (
    <>
      <SEO title="Not found" />
      <NotFoundPageContainer>
        <NotFoundIcon aria-label="page is not found" />
        <Header as="h1" size="huge" inverted={isDark}>
          OOPS!
        </Header>
        <Header as="h4" size="medium" inverted={isDark}>
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
