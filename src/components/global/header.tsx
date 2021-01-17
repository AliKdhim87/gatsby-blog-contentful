import React, { useState, useEffect } from "react"
import { useLocation } from "@reach/router"
import Link from "gatsby-link"
import styled from "styled-components"
import Img from "gatsby-image"

import {
  Icon,
  Sidebar,
  Visibility,
  Container,
  Segment,
  Grid,
  Header,
} from "semantic-ui-react"
import { graphql, useStaticQuery } from "gatsby"

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  margin-right: 1.5rem;
  padding: 2px;
  position: relative;
  transition: 250ms ease-in;
  &:hover {
    color: ${({ theme }) => theme.colors.aliceBlue} !important;
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    right: 0;
    bottom: -4px;
    height: 4px;
    background: ${({ theme }) => theme.colors.aliceBlue};
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
    color: ${({ theme }) => theme.colors.aliceBlue};
    border-bottom: 4px solid;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 2.5rem;
  }
`

const HeaderComponent: React.FC = () => {
  const { logo } = useStaticQuery(graphql`
    query GetLogo {
      logo: file(relativePath: { eq: "images/logo.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

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
        to="/blog"
        onClick={mobileMode ? () => setMobileMode(false) : undefined}
        activeClassName={activeLink("/blog") ? "active" : ""}
      >
        Blogs
      </NavLink>
      <NavLink
        to="/contact"
        onClick={mobileMode ? () => setMobileMode(false) : undefined}
        activeClassName={activeLink("/contact") ? "active" : ""}
      >
        Contact
      </NavLink>
      <NavLink
        to="/about"
        onClick={mobileMode ? () => setMobileMode(false) : undefined}
        activeClassName={activeLink("/about") ? "active" : ""}
      >
        About
      </NavLink>
    </>
  )

  return (
    <Visibility
      onUpdate={(_, data) => setWidth(data.calculations.width)}
      fireOnMount
      as="header"
    >
      <Segment inverted color="black" size="large" as="nav" attached>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column computer={4} mobile={8} tablet={6} as={Link} to="/">
                <Img fixed={logo.childImageSharp.fixed} />
              </Grid.Column>

              <Grid.Column
                only="computer tablet"
                width={10}
                verticalAlign="middle"
              >
                <Header textAlign="right" as="ul">
                  {navLinks}
                </Header>
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
        color="black"
        animation="push"
        inverted
        onHide={() => setMobileMode(false)}
        vertical
        visible={mobileMode}
        width="thin"
      >
        <Grid textAlign="center" stackable>
          {navLinks}
        </Grid>
      </Sidebar>
    </Visibility>
  )
}

export default HeaderComponent
