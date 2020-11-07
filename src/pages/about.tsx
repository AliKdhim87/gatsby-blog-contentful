import React from "react"
import { Link } from "gatsby"

const About: React.FC = () => {
  return (
    <>
      <h1>About</h1>
      <p>I'm a web developer</p>
      <Link to="/contact">Contact Me!</Link>
      <Link to="/">Back to home</Link>
    </>
  )
}

export default About
