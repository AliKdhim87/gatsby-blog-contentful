import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import HeaderBackground from "./headerBackground"

import {
  navItem,
  headerStyle,
  title,
  navLinks,
  activeNavItem,
} from "./header.module.scss"

const Header: React.FC = () => {
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

  return (
    <header className={headerStyle}>
      <nav>
        <ul className={navLinks}>
          <li>
            <Link className={navItem} activeClassName={activeNavItem} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className={navItem}
              activeClassName={activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={navItem}
              activeClassName={activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className={navItem}
              activeClassName={activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
      <HeaderBackground>
        <h1>
          <Link className={title} to="/">
            {mainTitle}
          </Link>
        </h1>
      </HeaderBackground>
    </header>
  )
}

export default Header
