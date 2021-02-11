import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown/with-html"
import { useTheme } from "styled-components"

import { Container, Divider, Header, Segment } from "semantic-ui-react"

import SEO from "components/global/SEO"
import MainTitle from "components/generic/MainTitle"
import CodeBlock from "components/generic/CodeBlock"

import { darkMode } from "utils/darkMode"

export const query = graphql`
  query getPostPerPage($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      slug
      image {
        title
        fluid(maxWidth: 700) {
          ...GatsbyContentfulFluid
        }
      }
      bodyContent {
        bodyContent
        childMarkdownRemark {
          excerpt
        }
      }
    }
  }
`

interface Props {
  data: any
}

const Blog: React.FC<Props> = ({
  data: {
    contentfulBlogPost: { title, publishedDate, image, bodyContent },
  },
}) => {
  const { mode } = useTheme()
  return (
    <>
      <SEO
        title={title}
        description={bodyContent.childMarkdownRemark.excerpt}
      />
      <Container text>
        <Segment
          basic
          padded
          color={darkMode(mode) ? "black" : "grey"}
          inverted
        >
          <MainTitle text={title} border="80px" />
          <Img fluid={image.fluid} alt={image.title} />
          <Segment size="large" basic textAlign="center">
            <Header as="p" size="tiny" inverted>
              {publishedDate}
            </Header>
          </Segment>
          <Divider />
          <ReactMarkdown
            source={bodyContent.bodyContent}
            renderers={{ code: CodeBlock }}
            allowDangerousHtml
          />
        </Segment>
      </Container>
    </>
  )
}

export default Blog
