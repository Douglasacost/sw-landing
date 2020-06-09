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
      </StyledLayaut>
    </>
  )
}

const StyledLayaut = styled.div`
  > main {
    position: relative;
    .main {
      margin: 0 auto;
      max-width: 960px;
      padding: 0 1.0875rem 1.45rem;
    }
    .main-wide {
      margin: 0 auto;
      max-width: 1200px;
      padding: 0 1.0875rem 1.45rem;
    }
    .with-background {
      background-image: url("${Background}");
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
