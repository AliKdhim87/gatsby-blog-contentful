import React, {useState, useEffect} from 'react'
import {useLocation} from '@reach/router'
import {Link} from 'gatsby'
import styled, {useTheme} from 'styled-components'
import {useStyledDarkMode} from 'gatsby-styled-components-dark-mode'

import {Icon, Sidebar, Visibility, Container, Segment, Grid, Header} from 'semantic-ui-react'

import {MainLogo} from 'svg-icons'

const NavLink = styled(Link)`
  color: ${({theme}) => theme.textColor};
  padding: 2px;
  position: relative;
  transition: 250ms ease-in;
  font-size: 18px;
  &:hover {
    color: ${({theme}) => theme.secondary} !important;
  }
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    right: 0;
    bottom: -4px;
    height: 4px;
    background: ${({theme}) => theme.secondary};
    transition: transform 250ms ease-in;
    transform: scaleX(0);
    transform-origin: left;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
  &.active {
    position: relative;
    color: ${({theme}) => theme.secondary};
  }
  @media (max-width: ${({theme}) => theme.breakpoint.mobile}) {
    margin-bottom: 2.5rem;
  }
`
const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  @media (max-width: ${({theme}) => theme.breakpoint.mobile}) {
    margin-top: 3rem;
    flex-direction: column;
    align-items: center;
  }
`

const HeaderComponent: React.FC = () => {
  const {isDark, textColor, secondary} = useTheme()
  const {toggleDark} = useStyledDarkMode()
  const {pathname} = useLocation()
  const [mobileMode, setMobileMode] = useState<boolean>(false)
  const [width, setWidth] = useState<number>(0)

  const activeLink = (path: string) => path === pathname

  useEffect(() => {
    if (width >= 768) {
      setMobileMode(false)
    }
  }, [width])

  const navLinks = (
    <>
      <NavLink
        to="/"
        onClick={mobileMode ? () => setMobileMode(false) : undefined}
        className={activeLink('/') ? 'active' : ''}
      >
        Home
      </NavLink>
      <NavLink
        to="/blog/"
        onClick={mobileMode ? () => setMobileMode(false) : undefined}
        className={activeLink('/blog/') ? 'active' : ''}
      >
        Blog
      </NavLink>
      <NavLink
        to="/contact/"
        onClick={mobileMode ? () => setMobileMode(false) : undefined}
        className={activeLink('/contact/') ? 'active' : ''}
      >
        Contact
      </NavLink>
      <NavLink
        to="/about/"
        onClick={mobileMode ? () => setMobileMode(false) : undefined}
        className={activeLink('/about/') ? 'active' : ''}
      >
        About
      </NavLink>
      <Icon
        style={{display: 'inline-block'}}
        link
        name={isDark ? 'moon' : 'sun'}
        size="large"
        color={isDark ? 'grey' : 'red'}
        onClick={() => toggleDark(!isDark)}
      />
    </>
  )

  return (
    <Visibility
      onUpdate={(_, data) => setWidth(data.calculations.width)}
      fireOnMount
      as="header"
      style={{marginBottom: '1rem'}}
    >
      <Segment inverted={isDark} size="small" as="nav">
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column computer={4} mobile={8} tablet={6} as={Link} to="/">
                <MainLogo aria-label="Ali dev logo" />{' '}
                <Header as="span" size="large" style={{color: secondary}}>
                  ALI DEV
                </Header>
              </Grid.Column>
              <Grid.Column floated="right" only="computer tablet" width={10} verticalAlign="middle">
                <NavLinksContainer>{navLinks}</NavLinksContainer>
              </Grid.Column>
              <Grid.Column
                width={8}
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
      <Sidebar
        as={Segment}
        inverted={isDark}
        animation="push"
        onHide={() => setMobileMode(false)}
        visible={mobileMode}
        width="thin"
        padded
      >
        <NavLinksContainer>{navLinks}</NavLinksContainer>
      </Sidebar>
    </Visibility>
  )
}

export default HeaderComponent
