import React from "react"
import styled, { css } from "styled-components"
import { flexCenter, FontSize, HideOnSmallDevices } from "../../const/styleds"

export const ButtonSection = ({ name, isActive }) => (
    <StyledButtonSection isActive={isActive}>
        <p>{name}</p>
        <div></div>
    </StyledButtonSection>
)

export const ButtonSectionContainer = styled.div`
    ${flexCenter}
    width: 32%;
    height: 100%;
    justify-content: space-between;
    margin: 0 2vw;
    ${HideOnSmallDevices}
  }
  `

const StyledButtonSection = styled.div`
    text-align: left;
    ${props => props.isActive ? css`
        font: normal 17px/26px 'Poppins Medium';
        color: #185F7F;
    ` : css`
        font: normal 17px/26px 'Poppins Regular';
        color: #555555;
    `}
    letter-spacing: 0px;
    position: relative;
    cursor: pointer;
    transition: all 500ms ease;
    &:hover {
      font-family: 'Poppins Medium';
      color: #185F7F;
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
    ${FontSize}
  `