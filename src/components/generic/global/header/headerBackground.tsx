import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import { background } from "./header.module.scss"

const HeaderBackground: React.FC = ({ children }) => {
  const { placeholderImage } = useStaticQuery(graphql`
    query headerBackgroundQuery {
      placeholderImage: file(relativeDirectory: { eq: "images" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!placeholderImage?.childImageSharp?.fluid) {
    return <>Picture not found</>
  }

  return (
    <BackgroundImage
      className={background}
      fluid={placeholderImage.childImageSharp.fluid}
    >
      {children}
    </BackgroundImage>
  )
}

export default HeaderBackground
