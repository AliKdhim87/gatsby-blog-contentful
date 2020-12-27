import React, { useState, useEffect } from "react"
import { useLocation } from "@reach/router"
import { graphql, useStaticQuery } from "gatsby"
import Link from "gatsby-link"
import Img from "gatsby-image"
import styled from "styled-components"

import { Menu, Icon, Sidebar, Visibility } from "semantic-ui-react"

const NavLinksContainer = styled(Menu.Item)`
  @media (max-width: 767px) {
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
      <Menu.Item
        name="home"
        active={activeLink("/")}
        as={Link}
        to="/"
        onClick={mobileMode ? () => setMobileMode(false) : undefined}
      >
        Home
      </Menu.Item>
      <Menu.Item
        name="blog"
        active={activeLink("/blog")}
        as={Link}
        to="/blog"
        onClick={mobileMode ? () => setMobileMode(false) : undefined}
      >
        Blogs
      </Menu.Item>
      <Menu.Item
        name="contact"
        active={activeLink("/contact")}
        as={Link}
        to="/contact"
        onClick={mobileMode ? () => setMobileMode(false) : undefined}
      >
        Contact
      </Menu.Item>
      <Menu.Item
        name="about"
        active={activeLink("/about")}
        as={Link}
        to="/about"
        onClick={mobileMode ? () => setMobileMode(false) : undefined}
      >
        About
      </Menu.Item>
    </>
  )

  return (
    <Visibility
      onUpdate={(_, data) => setWidth(data.calculations.width)}
      fireOnMount
    >
      <Menu
        inverted
        secondary
        color="blue"
        size="massive"
        as="header"
        style={{ marginBottom: "0" }}
      >
        <Menu.Item>
          <Img fixed={logo.childImageSharp.fixed} />
        </Menu.Item>

        <NavLinksContainer position="right">{navLinks}</NavLinksContainer>
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
      </Menu>
      <Sidebar
        as={Menu}
        animation="push"
        icon="labeled"
        inverted
        onHide={() => setMobileMode(false)}
        vertical
        visible={mobileMode}
        width="thin"
      >
        {navLinks}
      </Sidebar>
    </Visibility>
  )
}

export default HeaderComponent
