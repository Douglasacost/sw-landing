import React from "react"
import styled, { css } from "styled-components"
import { FontSize } from "../const/styleds"

function Button({ text, variant, children }) {
    return (
        <StyledButton variant={variant}>
            {text || children}
        </StyledButton>
    )
}

const StyledButton = styled.button`
    height: 50px;
    min-width: 120px;
    font: normal 17px/26px 'Poppins Medium';
    background: transparent linear-gradient(248deg, #1B92C8 0%, #2C3636 100%) 0% 0% no-repeat padding-box;
	color: #FFFFFF;
    border: none;
    border-radius: 5px;
	padding: 0;
	cursor: pointer;
    outline: inherit;
    padding: 0 20px;
    margin: 0 2vw;
    ${props => props.variant === 'light' && css`
        border: 1px solid #185F7F;
        color: #185F7F;
        background: transparent;
        &:hover {
            background: transparent linear-gradient(248deg, #1B92C8 0%, #2C3636 100%) 0% 0% no-repeat padding-box;
            color: #FFFFFF;
        }
    `}
    transition: all 500ms ease;
    &:hover {
        box-shadow: 4px 14px 20px -18px rgba(0,0,0,0.75);
    }
    ${FontSize}
`

export default Button