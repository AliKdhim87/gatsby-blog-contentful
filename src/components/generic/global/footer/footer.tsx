import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { footer } from "./footer.module.scss"

const Footer: React.FC = () => {
  const {
    site: {
      siteMetadata: { author },
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
    <footer className={footer}>
      <p>
        Created by {author}, ©{new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
