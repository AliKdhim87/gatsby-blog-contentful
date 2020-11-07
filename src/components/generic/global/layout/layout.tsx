import React from "react"

import Footer from "../footer/footer"
import Header from "../header/header"
import Head from "../head"

import "./styles/index.scss"

import { container, content } from "./layout.module.scss"

interface Props {
  title: string
  children: React.ReactNode | any
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  const getTitle = () => {
    if (children.key === "/") {
      return "Home"
    } else if (children.key === "/blog/") {
      return "Blog"
    } else if (children.key === "/contact/") {
      return "Contact"
    } else if (children.key === "/about/") {
      return "About"
    } else if (children.props.pathContext) {
      return children.props.pathContext.slug
    }
  }

  return (
    <div className={container}>
      <Head title={getTitle()} />
      <div className={content}>
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
