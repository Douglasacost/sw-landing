import React, { useState } from "react"
import styled, { css } from "styled-components"
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { flexCenter, Title } from "../const/styleds";
import useNews from "../utils/useNews";
import { isBetween } from "../utils/functions";

const News = () => {
    const [value, setValue] = useState(0)
    const [items] = useNews([])

    const onChange = (newValue) => {
        if(newValue === 0 && value === 0) {
            newValue = (items.length - 1)
        } else if(newValue >= (items.length - 1) && newValue >= value) {
            newValue = 0
        }
        window.requestAnimationFrame(() => {
            setValue(Math.min(newValue, items.length))
        })
    }

    const isActive = (current = 0) => {
        const min = (value-1)
        const max = (value+1)
        const wildCard = items.length-1

        if (wildCard === value && current === 0) return true
        if (value === 0 && current === wildCard) return true
        return isBetween(current, min, max)
    }

    return (
        <NewsContainer>
            <p className="title" >What is the <strong>Speciality Of Us?</strong></p>
            <div className="carousel-container">
                <Carousel
                    value={value}
                    slidesPerPage={5}
                    clickToChange
                    onChange={onChange}
                    infinite
                    centered
                >
                    {items && items.map((item, i) => {
                        return (
                            <StyledSlide id={i} isActive={isActive(i)} key={i}>
                                <img alt={item.title} className="new-image" src={item.urlToImage} />
                                <div className="new-title">{item.title}</div>
                                <div className="new-content">{item.description}</div>
                            </StyledSlide>
                        )
                    })}
                </Carousel>
                <ButtonsContainer>
                    <ArrowButton onClick={() => onChange(Math.max(value - 1, 0))}><FontAwesomeIcon icon={faArrowLeft} /></ArrowButton>
                    <ArrowButton onClick={() => onChange(Math.max(value + 1, 0))}><FontAwesomeIcon icon={faArrowRight} /></ArrowButton>
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
    margin-top: 10px;
    width: 22vw;
    height: 26.5vw;
    min-height: 60vh;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 10px 30px #99999933;
    border-radius: 8px;
    margin: 0 1vw;
    padding: 0 1.5em;
    margin-bottom: 2em !important;
    overflow: hidden;
    will-change: transform; 
    transition: all 500ms ease;
    &:hover {
        box-shadow: 4px 5px 10px #99999933;
        border: 0.5px solid aliceblue;
    }
    ${props => !props.isActive && css`
        transform: scale(0.9);
    `}
    > * {
        will-change: transform; 
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        margin: min(0.8vw, 15px) 0;
        text-align: center;
        overflow: hidden;   
        transition: all 500ms ease;
        letter-spacing: 0px;
    }
    .new-image {
        ${props => !props.isActive && css`
            filter: blur(4px);
            transform: scale(0.9);
        `}
        height: 12vw;
        width: 12vw;
        border-radius: 50%;
        background: aliceblue;
        object-fit: cover;
    }
    .new-title {
        font: normal min(1.2vw, 22px)/min(1.5vw, 29px) 'Poppins Regular';
        color: #222222;
    }
    .new-content {        
        font: normal min(1vw, 15px)/min(1.3vw, 27px) 'Poppins Regular';
        color: #555555;
    }
`

const NewsContainer = styled.div`
    margin: 2em 0;
    ${flexCenter}
    flex-direction: column;
    height: calc(100vh);
    overflow: hidden;
    .title {
        ${Title}
    }
    .carousel-container {
        height: auto;
        padding-top: 1em;
        width: 118vw;
    }
    .BrainhubCarouselItem {
        will-change: transform;
        width: unset !important;
        min-width: unset !important;
    }
`

export default News
