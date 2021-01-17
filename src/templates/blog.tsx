import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown/with-html"

import { Container, Divider, Segment } from "semantic-ui-react"

import SEO from "components/global/SEO"
import MainTitle from "components/generic/MainTitle"
import CodeBlock from "components/generic/CodeBlock"

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
      }
      description {
        description
      }
    }
  }
`

interface Props {
  data: any
}

const Blog: React.FC<Props> = ({
  data: {
    contentfulBlogPost: {
      title,
      publishedDate,
      image,
      bodyContent: { bodyContent },
      description: { description },
    },
  },
}) => {
  return (
    <>
      <SEO title={title} description={description} />
      <Container text>
        <Segment basic padded size="massive">
          <MainTitle text={title} borderBottomWidth="80px" />
        </Segment>
        <Segment secondary basic padded>
          <Img fluid={image.fluid} alt={image.title} />
          <Segment as="p" size="large" basic secondary textAlign="center">
            {publishedDate}
          </Segment>
          <Divider />
          <ReactMarkdown
            source={bodyContent}
            renderers={{ code: CodeBlock }}
            allowDangerousHtml
          />
        </Segment>
      </Container>
    </>
  )
}

export default Blog
