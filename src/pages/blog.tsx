import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import { posts } from "./blog.module.scss"
import { GetAllBlogsQuery } from "../../graphql-types"

const BlogPage: React.FC = () => {
  const { allContentfulBlogPost } = useStaticQuery<GetAllBlogsQuery>(graphql`
    query getAllBlogs {
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
    <>
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
    </>
  )
}

export default BlogPage
