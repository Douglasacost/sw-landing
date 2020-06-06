import PropTypes from "prop-types"
import React from "react"
import styled, { css } from "styled-components"
import Image from "../image"
import { SECTIONS_LIST } from "../../const/sections"
import { flexCenter, GlobalStyle } from "../../const/styleds"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Logo><Image /></Logo>
    <ButtonSectionContainer>
      {SECTIONS_LIST.map((item, index) => (<ButtonSection key={index} {...item} />))}
    </ButtonSectionContainer>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const ButtonSection = ({ name, isActive }) => (
  <StyledButtonSection isActive={isActive}>
    <GlobalStyle />
    <p>{name}</p>
    <div></div>
  </StyledButtonSection>
)

const ButtonSectionContainer = styled.div`
  display: flex;
  width: 38%;
  justify-content: center;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  margin: 0 40px;
}
`

const StyledButtonSection = styled.div`
  text-align: left;
  font: ${props => props.isActive ? "normal 17px/26px 'Poppins Medium'" : "normal 17px/26px 'Poppins Regular'"};
  letter-spacing: 0px;
  color: #185F7F;
  position: relative;
  margin: 0 15px;
  cursor: pointer;
  transition: all 500ms ease;
  &:hover {
    font-family: 'Poppins Medium';
  }
  p {
    margin: 0;
  }
  ${flexCenter}
  >div {
    ${props => !props.isActive && css`display: none;`}
    position: absolute;
    background: #185F7F 0% 0% no-repeat padding-box;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 30px;
  }
`

const Logo = styled.div`
  width: 180px;
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
