import React, { useState } from "react"
import { useLocation } from "@reach/router"
import { graphql, useStaticQuery } from "gatsby"
import Link from "gatsby-link"

import {
  Menu,
  Container,
  Header,
  Icon,
  MenuItem,
  Sidebar,
} from "semantic-ui-react"

import { useCurrentWidth } from "hooks/useWidth"

const HeaderComponent: React.FC = () => {
  const width = useCurrentWidth()
  const { pathname } = useLocation()
  const [mobileMode, setMobileMode] = useState<boolean>(false)

  const activeLink = (path: string) => path === pathname
  const {
    site: {
      siteMetadata: { title: mainTitle },
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
    <>
      <Menu
        inverted
        secondary
        color="blue"
        size="massive"
        as="header"
        style={{ marginBottom: "0" }}
      >
        <Menu.Item>
          <Header as="span" inverted>
            {mainTitle}
          </Header>
        </Menu.Item>
        <Container text>
          {width <= 767 ? (
            <MenuItem
              style={{ padding: "1.8rem 1rem", marginRight: "0" }}
              position="right"
              visible={width <= 767 ? "visible" : "hidden"}
              onClick={() => setMobileMode(!mobileMode)}
            >
              <Icon
                name={mobileMode ? "close" : "bars"}
                inverted
                size="large"
              />
            </MenuItem>
          ) : (
            <MenuItem position="right">{navLinks}</MenuItem>
          )}
        </Container>
      </Menu>
      <Sidebar
        as={Menu}
        animation="push"
        icon="labeled"
        inverted
        onHide={() => setMobileMode(false)}
        vertical
        visible={mobileMode}
        width="wide"
      >
        {navLinks}
      </Sidebar>
    </>
  )
}

export default HeaderComponent
