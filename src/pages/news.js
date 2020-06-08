import React, { useState } from "react"
import styled from "styled-components"
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { flexCenter } from "../const/styleds";
import useNews from "../utils/useNews";

// apikey:: 4607f217a2004708b76471b06cbcb78a

const NEWS_ = [1,2,3,4,5]
const News = () => {
    const [value, setValue] = useState(0)
    const [news] = useNews()

    const onChange = (newValue) => {
        setValue(Math.min(newValue, 5))
    }
    
    return (
        <NewsContainer>
            <p className="title" >What is the <strong>Speciality Of Us?</strong></p>
            <div className="carouselContainer">
            <Carousel
                value={value}
                slidesPerPage={4}
                onChange={onChange}
                infinite
                centered
            >
                {NEWS_.map((_, i) => {
                    return (
                        <StyledSlide key={i}>
                            <div className="new-image"></div>
                            <div className="new-title">Avatar</div>
                            <div className="new-content">Avatar</div>
                        </StyledSlide>
                    )
                })}
            </Carousel>
            <ButtonsContainer>
                <ArrowButton onClick={() => onChange(Math.max(value + 1, 0))}><FontAwesomeIcon icon={faArrowLeft} /></ArrowButton>
                <ArrowButton onClick={() => onChange(Math.max(value - 1, 0))}><FontAwesomeIcon icon={faArrowRight} /></ArrowButton>
            </ButtonsContainer>
            </div>
        </NewsContainer>
    )
}

const ButtonsContainer = styled.div`
    ${flexCenter}
`

const ArrowButton = styled.div`
    ${flexCenter}
    width: 60px;
    height: 60px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 10px 30px #99999933;
    border-radius: 50%;
    margin: 0 1em;
    cursor: pointer;
    transition: all 500ms ease;
    &:hover {
        box-shadow: 4px 5px 10px #99999933;
        border: 0.5px solid aliceblue;
    }
`

const StyledSlide = styled.div`
    ${flexCenter}
    flex-direction: column;
    justify-content: start;
    width: 423px;
    height: 532px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 10px 30px #99999933;
    border-radius: 8px;
    margin: 0 3em;
    margin-bottom: 2em !important;
    .new-image {
        height: 255px;
        width: 255px;
        border-radius: 50%;
        background: aliceblue;
        margin: 15px 0;
    }
    .new-title {
        text-align: center;
        font: normal 29px/29px 'Poppins Regular';
        letter-spacing: 0px;
        color: #222222;
        margin: 15px 0;
    }
    .new-content {
        text-align: center;
        font: normal 15px/27px 'Poppins Regular';
        letter-spacing: 0px;
        color: #555555;
        margin: 15px 0;
    }
`

const NewsContainer = styled.div`
    margin: 2em 0;
    ${flexCenter}
    flex-direction: column;
    height: calc(100vh - 100px);
    .title {
        font: normal 43px/55px "Montserrat Regular";
        color: #222222;
        width: 400px;
        text-align: center;
        margin-bottom: 1em;
    }
    .carouselContainer {
        height: auto;
        width: 100vw;
    }
`

export default News
