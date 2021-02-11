import React from "react"

import SEO from "components/global/SEO"
import Blog from "components/blog/index"

const BlogPage: React.FC = () => {
  return (
    <>
      <SEO title="Blog page" />
      <Blog />
    </>
  )
}

export default BlogPage
