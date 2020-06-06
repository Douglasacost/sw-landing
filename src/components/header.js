import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Image from "./image"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Logo><Image /></Logo>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const Logo = styled.div`
  height: 50px;
  width: 180px;
`

const StyledHeader = styled.header`
  background: white;
  margin-bottom: 1.45rem;
  height: 150px;
  max-height: 150px;
`

export default Header
