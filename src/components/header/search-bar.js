import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons"

function SearchBar () {
    return (
        <InputBox>
            <input aria-label="input" placeholder="Search Here" />
            <FontAwesomeIcon icon={faSearch}/>
        </InputBox>
    )
}

const InputBox = styled.div`
    height: 50px;
    width: 20vw;
    display: flex;
    align-items: center;
    position: relative;
    transition: all 500ms ease;
    svg {
        font-size: 20px;
        opacity: 0.7;
        position: absolute;
        left: calc(100% - 40px);
    }
    input {
        width: 100%;
        border: 1px solid #C6BAF8;
        border-radius: 4px;
        height: 49px;
        background-image:none;
        background-color:transparent;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        font: normal 14px/26px 'Poppins Regular';
        padding: 0 20px;
        &::placeholder {
            color: #CCCCCC;
        }
    }
    input:focus {
        outline: none;
        color: #555555;
        box-shadow: inset 0px 0px 15px -10px rgba(0,0,0,0.4);
    }
`

export default SearchBar