import React from "react"
import { Link } from "gatsby"

import Layout from "../components/generic/layout"

const IndexPage = () => {
  return (
    <Layout title="Home">
      <h1>Hello</h1>
      <h4>I'm Ali, a full-stack developer living in Netherland</h4>
      <p>
        Need a developer <Link to="/about">Contact Me</Link>
      </p>
    </Layout>
  )
}
export default IndexPage
