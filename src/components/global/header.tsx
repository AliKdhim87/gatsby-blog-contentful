import React, { useState, useEffect } from "react"
import { useLocation } from "@reach/router"
import { graphql, useStaticQuery } from "gatsby"
import Link from "gatsby-link"
import Img from "gatsby-image"
import styled from "styled-components"

import { Menu, Icon, Sidebar, Visibility, Container } from "semantic-ui-react"

const NavLinksContainerComputer = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 50%;
  align-items: center;
  margin-left: auto;
  @media (max-width: 767px) {
    visibility: hidden;
    content-visibility: hidden;
  }
`
const NavLinksContainerMobile = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  flex-direction: column;
  height: 40%;
  @media (min-width: 768px) {
    visibility: hidden;
    content-visibility: hidden;
  }
`
const MenuHamburgerButtonContainer = styled(Menu.Item)`
  @media (min-width: 768px) {
    visibility: hidden;
    content-visibility: hidden;
  }
`
const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  padding: 5px;
  position: relative;
  transition: 250ms ease-in;
  &:hover {
    color: ${({ theme }) => theme.colors.background} !important;
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    right: 0;
    bottom: -5px;
    height: 3px;
    background: ${({ theme }) => theme.colors.background};
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
    color: ${({ theme }) => theme.colors.background};
    border-bottom: 5px solid;
  }
`

const HeaderComponent: React.FC = () => {
  const { pathname } = useLocation()
  const [mobileMode, setMobileMode] = useState<boolean>(false)
  const [width, setWidth] = useState<number>(0)

  const activeLink = (path: string) => path === pathname

  const { logo } = useStaticQuery(graphql`
    query GetLogo {
      logo: file(relativePath: { eq: "images/coding.png" }) {
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

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
      <Menu
        inverted
        secondary
        color="blue"
        size="massive"
        as="nav"
        style={{ marginBottom: "0" }}
      >
        <Container>
          <Menu.Item>
            <Img fixed={logo.childImageSharp.fixed} />
          </Menu.Item>

          <NavLinksContainerComputer> {navLinks}</NavLinksContainerComputer>
          <MenuHamburgerButtonContainer
            onClick={() => setMobileMode(!mobileMode)}
          >
            <Icon
              name={mobileMode ? "close" : "bars"}
              inverted
              size="large"
              aria-label="menu button"
            />
          </MenuHamburgerButtonContainer>
        </Container>
      </Menu>
      <Sidebar
        as={Menu}
        color="blue"
        animation="push"
        inverted
        onHide={() => setMobileMode(false)}
        vertical
        visible={mobileMode}
        width="thin"
      >
        <NavLinksContainerMobile>{navLinks}</NavLinksContainerMobile>
      </Sidebar>
    </Visibility>
  )
}

export default HeaderComponent
