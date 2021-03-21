import React, {useContext} from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import {useTheme} from 'styled-components'

import {Icon, Visibility, Container, Segment, Grid, Header} from 'semantic-ui-react'

import {MainLogo} from 'svg-icons'
import {LayoutContext} from 'components/global/LayoutContext'

import NavLinks from './NavLinks'

const HeaderComponent: React.FC = () => {
  const {textColor, secondary} = useTheme()
  const {mobileMode, setMobileMode} = useContext(LayoutContext)

  const {site} = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Visibility
      onUpdate={(_, data) => data.calculations.width >= 768 && setMobileMode(false)}
      fireOnMount
      as="header"
      style={{marginBottom: '1rem'}}
    >
      <Segment inverted size="small" as="nav" attached>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column computer={4} mobile={12} tablet={6} as={Link} to="/">
                <MainLogo aria-label="Ali dev logo" />{' '}
                <Header as="span" size="large" style={{color: secondary}}>
                  {site.siteMetadata.title}
                </Header>
              </Grid.Column>
              <Grid.Column floated="right" only="computer tablet" width={10} verticalAlign="middle">
                <NavLinks />
              </Grid.Column>
              <Grid.Column
                width={4}
                verticalAlign="middle"
                only="mobile"
                onClick={() => setMobileMode(!mobileMode)}
              >
                <Header size="tiny" textAlign="right">
                  <Icon
                    link
                    name={mobileMode ? 'close' : 'bars'}
                    inverted
                    style={{color: textColor}}
                    size="small"
                    aria-label="menu button"
                  />
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </Visibility>
  )
}

export default HeaderComponent
