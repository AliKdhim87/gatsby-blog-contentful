import React from "react"
import { Link } from "gatsby"

const IndexPage: React.FC = () => {
  return (
    <>
      <h1>Hello</h1>
      <h4>I'm Ali, a full-stack developer living in Netherland</h4>
      <p>
        Need a developer <Link to="/about">Contact Me</Link>
      </p>
    </>
  )
}
export default IndexPage
