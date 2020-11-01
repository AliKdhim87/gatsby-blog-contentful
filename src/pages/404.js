import React from "react"
import { Link } from "gatsby"

import Layout from "../components/generic/layout"

const NotFound = () => {
  return (
    <Layout title="404">
      <h1>Page not found</h1>
      <p>
        <Link to="/">Head home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
