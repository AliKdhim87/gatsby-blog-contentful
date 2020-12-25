import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const HeaderBackground: React.FC = ({ children }) => {
  const { placeholderImage } = useStaticQuery(graphql`
    query headerBackgroundQuery {
      placeholderImage: file(relativePath: { eq: "images/contact.jpg" }) {
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
    <BackgroundImage fluid={placeholderImage.childImageSharp.fluid}>
      {children}
    </BackgroundImage>
  )
}

export default HeaderBackground
