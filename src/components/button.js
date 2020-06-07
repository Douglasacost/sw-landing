import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { device, FontSize } from "../const/styleds"

function Button({ text, variant }) {
    return (
        <StyledButton>
            {text}
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
    transition: all 500ms ease;
    &:hover {
        box-shadow: 4px 14px 20px -18px rgba(0,0,0,0.75);
    }
    ${FontSize}
`

export default Button