import React from "react"

import SEO from "components/global/SEO"
import ContactComponent from "components/contact/index"

const Contact: React.FC = () => {
  return (
    <>
      <SEO title="Contact" />
      <ContactComponent />
    </>
  )
}

export default Contact
