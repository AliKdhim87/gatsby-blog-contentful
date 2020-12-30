import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { MARKS, BLOCKS } from "@contentful/rich-text-types"
import SyntaxHighlighter from "react-syntax-highlighter"
import { obsidian } from "react-syntax-highlighter/dist/esm/styles/hljs"
import Img from "gatsby-image"

import { Container, Header } from "semantic-ui-react"

import SEO from "components/global/SEO"

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
      body {
        json
      }
    }
  }
`

interface Props {
  data: any
}

const Blog: React.FC<Props> = ({
  data: {
    contentfulBlogPost: { title, publishedDate, body, image, slug },
  },
}) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (
        node: { content: string | any[] },
        children: {} | null | undefined
      ) => {
        if (
          node.content.length === 1 &&
          node.content[0].marks.find((x: { type: string }) => x.type === "code")
        ) {
          return <>{children}</>
        }
        return <p>{children}</p>
      },
    },
    renderMark: {
      [MARKS.CODE]: (text: any) => {
        return (
          <SyntaxHighlighter
            key={text}
            language="javascript"
            style={obsidian}
            showLineNumbers
            startingLineNumber={0}
          >
            {text}
          </SyntaxHighlighter>
        )
      },
    },
  }

  return (
    <>
      <SEO title={slug} />
      <Container>
        <Header as="h1" size="huge" textAlign="center" inverted>
          {title}
        </Header>
        <Header as="h2" textAlign="center" size="small" inverted>
          {publishedDate}
        </Header>
        <Img
          fluid={image.fluid}
          alt={image.title}
          style={{ height: "500px" }}
        />
        {documentToReactComponents(body.json, options)}
      </Container>
    </>
  )
}

export default Blog
