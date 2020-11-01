import React from "react"
import { Link } from "gatsby"

import Layout from "../components/generic/layout"

const About = () => {
  return (
    <Layout title="About">
      <h1>About</h1>
      <p>I'm a web developer</p>
      <Link to="/contact">Contact Me!</Link>
      <Link to="/">Back to home</Link>
    </Layout>
  )
}

export default About
