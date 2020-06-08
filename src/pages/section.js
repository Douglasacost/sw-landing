import React from "react"
import styled, { css } from "styled-components"
import { flexCenter } from "../const/styleds"
import SectionImage from "../components/images/section-image"
import Button from "../components/button"
import { ARTICLES } from "../const/sections"

const Section = ({ article }) => {
    return (
        <StyledSection article={article}>
            <div className="main">
                <div>
                    <p className="title"  dangerouslySetInnerHTML={{ __html: ARTICLES[article].title }}/>
                    <p className="content" dangerouslySetInnerHTML={{ __html: ARTICLES[article].content }}/>
                    {article === 0 && (<Button variant="light">Know more</Button>)}
                </div>
                <ImageContainer>
                    <div className="circle circle-1"/>
                    <SectionImage image={`article${article + 1}`} />
                    <div className="circle circle-2"/>
                </ImageContainer>
            </div>
    
        </StyledSection>
    )
}

const ImageContainer = styled.div`
    position: relative;
    > div {
        width: 500px;
    }
    > .circle {
        position: absolute;
        background: #0000FF 0% 0% no-repeat padding-box;
        border-radius: 50%;
        opacity: 0.03;
    }
    > .circle:first-child {
        left: -15%;
        bottom: 0px;
        width: 43vh;
        height: 43vh;
    }
    > .circle:last-child {
        top: 0;
        width: 48vh;
        height: 48vh;
    }
`

const StyledSection = styled.div`
    > div {
        max-width: 1200px !important;
        ${flexCenter}
        justify-content: space-between;
        ${props => props.article > 0 && css`
            flex-direction: row-reverse;
        `}
        > div {
            width: 560px;
            font: normal 15px/27px "Poppins Regular";
            .title {
                margin-right: 4em;
                font: normal 43px/55px "Montserrat Regular";
                color: #222222;
            }
            > button {
                margin: 0;
            }
        }
    }    
    height: 55vh;
    width: 99vw;
    margin: 4em 0;
`

export default Section
