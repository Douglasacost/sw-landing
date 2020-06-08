import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GlobalStyle } from "../const/styleds"
import Home from "./home"
import Section from "./section"
import News from "./news"
import Clients from "./clients"

const IndexPage = () => (
  <>
    <GlobalStyle/>
    <Layout>
      <SEO title="Home"/>
      <Home/>
      <Section article={0}/>
      <Section article={1}/>
      <News/>
      <Clients/>
    </Layout>
  </>
)

export default IndexPage
