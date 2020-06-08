import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Logo from "../images/logo"
import { SECTIONS_LIST } from "../../const/sections"
import { device } from "../../const/styleds"
import SearchBar from "./search-bar"
import { ButtonSectionContainer, ButtonSection } from "./links"
import Button from "../button"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <LogoContainer><Logo /></LogoContainer>
    <ButtonSectionContainer>
      {SECTIONS_LIST.map((item, index) => (<ButtonSection key={index} {...item} />))}
    </ButtonSectionContainer>
    <SearchBar />
    <Button text="Contact Us" />
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const LogoContainer = styled.div`
  width: 180px;
  margin-right: 2vw;
  @media ${device.laptopL} {
    margin-right: 5vw;
  }
`

const StyledHeader = styled.header`
  background: white;
  margin-bottom: 1.45rem;
  height: 100px;
  max-height: 100px;
  display: flex;
  align-items: center;
  margin: 0 60px;
`

export default Header
