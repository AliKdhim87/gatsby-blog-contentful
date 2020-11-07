import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/generic/layout"

import { GetPostPerPageQuery } from "../../graphql-types"

export const query = graphql`
  query getPostPerPage($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate
      slug
      body {
        json
      }
    }
  }
`

interface Props {
  data: GetPostPerPageQuery
}

const Blog: React.FC<Props> = ({
  data: {
    contentfulBlogPost: { title, publishedDate, body, slug },
  },
}) => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img src={url} alt={alt} />
      },
    },
  }
  return (
    <>
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      {documentToReactComponents(body.json, options)}
    </>
  )
}

export default Blog
