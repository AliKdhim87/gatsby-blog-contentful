import React from 'react'

import SEO from 'components/global/SEO'
import Home from 'components/home/index'

const IndexPage: React.FC = () => {
  return (
    <>
      <SEO title="Home page" />
      <Home />
    </>
  )
}
export default IndexPage
