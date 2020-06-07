import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import styled from "styled-components"
import Background from '../images/Group 2258.png'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <StyledLayaut>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </StyledLayaut>
    </>
  )
}

const StyledLayaut = styled.div`
  > main {
    position: relative;
    > div > div {
      margin: 0 auto;
      max-width: 960px;
      padding: 0 1.0875rem 1.45rem;
    }
    >div:first-child {
      background-image: url("${Background}");
    }
  }
  `;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
