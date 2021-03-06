import React from 'react'

import SEO from 'components/global/SEO'
import ContactComponent from 'components/contact/index'

const Contact: React.FC = () => {
  return (
    <>
      <SEO title="Contact me page" />
      <ContactComponent />
    </>
  )
}

export default Contact
