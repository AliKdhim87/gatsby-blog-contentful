import React, { useState, useEffect } from "react"
import { useLocation } from "@reach/router"
import { Link } from "gatsby"
import styled, { useTheme } from "styled-components"

import {
  Icon,
  Sidebar,
  Visibility,
  Container,
  Segment,
  Grid,
  Header,
} from "semantic-ui-react"

import { Logo, LogoLight } from "svg-icons"

import { darkMode } from "utils/darkMode"

const NavLink = styled(Link)`
  color: ${({ theme }) =>
    darkMode(theme.mode) ? theme.colors.grey : theme.colors.black};
  padding: 2px;
  position: relative;
  transition: 250ms ease-in;
  font-size: 18px;
  &:hover {
    color: ${({ theme }) =>
      darkMode(theme.mode) ? theme.colors.orange : theme.colors.red} !important;
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    right: 0;
    bottom: -4px;
    height: 4px;
    background: ${({ theme }) =>
      darkMode(theme.mode) ? theme.colors.orange : theme.colors.red};
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
    color: ${({ theme }) =>
      darkMode(theme.mode) ? theme.colors.orange : theme.colors.red};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-bottom: 2.5rem;
  }
`
const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 3rem;
    flex-direction: column;
    align-items: center;
  }
`

const HeaderComponent: React.FC = () => {
  const { setMode, mode } = useTheme()
  const { pathname } = useLocation()
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
        activeClassName={activeLink("/") ? "active" : ""}
      >
        Home
      </NavLink>
      <NavLink
        to="/blog/"
        onClick={mobileMode ? () => setMobileMode(false) : undefined}
        activeClassName={activeLink("/blog/") ? "active" : ""}
      >
        blog
      </NavLink>
      <NavLink
        to="/contact/"
        onClick={mobileMode ? () => setMobileMode(false) : undefined}
        activeClassName={activeLink("/contact/") ? "active" : ""}
      >
        Contact
      </NavLink>
      <NavLink
        to="/about/"
        onClick={mobileMode ? () => setMobileMode(false) : undefined}
        activeClassName={activeLink("/about/") ? "active" : ""}
      >
        About
      </NavLink>
      <Icon
        style={{ display: "inline-block" }}
        link
        name={darkMode(mode) ? "moon" : "sun"}
        size="large"
        color={darkMode(mode) ? "grey" : "red"}
        onClick={() => setMode(darkMode(mode) ? "light" : "dark")}
      />
    </>
  )

  return (
    <Visibility
      onUpdate={(_, data) => setWidth(data.calculations.width)}
      fireOnMount
      as="header"
      style={{ marginBottom: "1rem" }}
    >
      <Segment
        inverted
        color={darkMode(mode) ? "black" : "grey"}
        size="small"
        as="nav"
      >
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column computer={4} mobile={8} tablet={6} as={Link} to="/">
                {darkMode(mode) ? (
                  <Logo aria-label="Ali dev logo" />
                ) : (
                  <LogoLight aria-label="Ali dev logo" />
                )}
              </Grid.Column>
              <Grid.Column
                floated="right"
                only="computer tablet"
                width={10}
                verticalAlign="middle"
              >
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
                    name={mobileMode ? "close" : "bars"}
                    inverted
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
        color={darkMode(mode) ? "black" : "grey"}
        animation="push"
        inverted
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
