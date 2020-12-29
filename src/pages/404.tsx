import React from "react"
import { Link } from "gatsby"

import SEO from "components/global/SEO"

const NotFound: React.FC = () => {
  return (
    <>
      <SEO title="Not found" />
      <h1>Page not found</h1>
      <p>
        <Link to="/">Head home</Link>
      </p>
    </>
  )
}

export default NotFound
