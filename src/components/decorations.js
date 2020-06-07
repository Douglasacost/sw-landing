import React from "react"
import styled from "styled-components"

function Figure ({type}) {
    if(type === 'circle') {
        return (<Circle><div/></Circle>)
    }
    return (<Squares><div/><div/></Squares>)
}

const Circle = styled.div`

`

const Squares = styled.div`
    width: 150px;
    height: 150px;
    position: relative;
    div {
        background: #0000FF 0% 0% no-repeat padding-box;
        opacity: 0.03;
        border-radius: 5px;
        position: absolute;
    }
    div:first-child {
        width: 118px;
        height: 118px;
    }
    div:last-child {
        width: 71px;
        height: 71px;
        top: calc(100% - 71px);
        left: calc(100% - 71px);
    }
`

export default Figure