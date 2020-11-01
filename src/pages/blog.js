import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/generic/layout"
import { posts } from "./blog.module.scss"
const BlogPage = () => {
  const { allContentfulBlogPost } = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            contentful_id
          }
        }
      }
    }
  `)

  return (
    <Layout title="Blog">
      <h1>Blog</h1>
      <ol className={posts}>
        {allContentfulBlogPost.edges.map(post => (
          <li key={post.node.slug}>
            <Link to={post.node.slug}>
              <h2>{post.node.title}</h2>
              <p>{post.node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
