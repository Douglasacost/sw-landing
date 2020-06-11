import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GlobalStyle } from "../const/styleds"
import Home from "./home"
import Section from "./section"
import News from "./news"
import Clients from "./clients"
import Comments from "./comments"
import { StateProvider } from "../context/store"
import Form from "./form"
import Footer from "./footer"
import { config } from "@fortawesome/fontawesome-svg-core"
import '../../node_modules/@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;

const IndexPage = () => (
  <>
    <StateProvider>
      <GlobalStyle />
      <Layout>
        <SEO title="Home" />
        <Home />
        <Section article={0} />
        <Section article={1} />
        <News />
        <Clients />
        <Comments />
        <Form/>
        <Footer/>
      </Layout>
    </StateProvider>
  </>
)

export default IndexPage
