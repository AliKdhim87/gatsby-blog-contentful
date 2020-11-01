import React from "react"

import Footer from "./footer"
import Header from "./header"
import Head from "./head"

import "../../styles/index.scss"

import { container, content } from "./layout.module.scss"

const Layout = ({ children, title }) => {
  return (
    <div className={container}>
      <Head title={title} />
      <div className={content}>
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
