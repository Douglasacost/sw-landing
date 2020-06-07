import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GlobalStyle } from "../const/styleds"
import Home from "./home"
import Section from "./section"

const IndexPage = () => (
  <>
    <GlobalStyle />
    <Layout>
      <SEO title="Home" />
      <Home />
      <Section />
    </Layout>
  </>
)

export default IndexPage
