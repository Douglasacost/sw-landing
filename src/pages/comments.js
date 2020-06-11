import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { flexCenter, Title } from "../const/styleds";
import useJsonApi from "../utils/useJsonApi";
import { isBetween } from "../utils/functions";
import LeftQuote from '../images/quote-left.svg'
import RightQuote from '../images/quote-right.svg'

const Comments = () => {
    const [value, setValue] = useState(0)
    const [items, setItems] = useState(0)
    const [actions, state] = useJsonApi()

    const onChange = (newValue) => {
        window.requestAnimationFrame(() => {
            setValue(Math.min(newValue, items.length - 1))
        })
    }

    const shouldMove = (current = 0) => {
        const min = (value - 1)
        const max = (value + 1)
        const wildCard = items.length - 1

        if (wildCard === value && current === 0) return true
        if (value === 0 && current === wildCard) return true
        return isBetween(current, min, max)
    }

    const shouldInvert = (current = 0) => {
        const wildCard = items.length - 1
        if(value - 1 === 0 && current === wildCard) return true
        if(value - 1 === current) return true
        return false
    }

    const shouldShow = (current = 0) => {
        const wildCard = items.length - 1
        if (value === 0 && current >= wildCard - 2) return true
        if(value === wildCard && current <= 1) return true
        if ((current >= value + 2) || (current >= value - 2)) return true
        if(value === wildCard - 2 && current === 0) return true
        return false
    }

    useEffect(() => {
        actions.fetchPosts()
    }, [])

    useEffect(() => {
        setItems(state.comments)
        setValue(5)
    }, [state])

    return (
        <NewsContainer>
            <p className="title" >What Our <strong>Client Says?</strong></p>
            <div className="carousel-container">
                <Carousel
                    value={value}
                    slidesPerPage={5}
                    animationSpeed={1000}
                    clickToChange
                    onChange={onChange}
                    centered
                >
                    {items && items.map((item, i) => {
                        return (
                            <StyledSlide
                                shouldShow={shouldShow(i)}
                                shouldMove={shouldMove(i)}
                                shouldInvert={shouldInvert(i)}
                                isActive={value === i}
                                id={i}
                                key={i}
                            >
                                <img alt={item.title} className="comment-image" src={item.photo} />
                                <div className="comment-body">
                                    <img src={LeftQuote} alt="quote"/>
                                    {item.post.body}
                                    <img src={RightQuote} alt="quote"/>
                                </div>
                                <div className="comment-name">{item.user.name}</div>
                                <div className="comment-from">{item.user.company.name}</div>
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
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 88%;
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
    &:hover, &:active {
        box-shadow: 4px 5px 10px #99999933;
        border: 0.5px solid aliceblue;
    }
`

const StyledSlide = styled.div`
    ${flexCenter}
    flex-direction: column;
    ${props => props.isActive && css`
        width: 20vw;
    `}
    height: 30.5vw;
    min-height: 65vh;
    > * {
        will-change: transform;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        margin: min(0.8vw, 15px) 0;
        text-align: center;
        overflow: hidden;   
        transition: all 300ms ease;
        letter-spacing: 0px;
        opacity: 1;
        ${props => !props.isActive && css`
            display: none;
            opacity: 0;
        `}
    }
    .comment-image {
        transition: all 800ms ease;
        opacity: 0;
        display: block;
        ${props => props.shouldShow && css`
            opacity: 1;
        `}
        transform: translateY(40%) scale(0.4);
        ${props => props.shouldMove && css`
            opacity: 1;
            transform: 
            translateY(${props => props.shouldInvert ? '180%' : '-58%'}) 
            translateX(${props => props.shouldInvert ? '-180%' : '180%'})
            scale(0.7);
        `}
        ${props => props.isActive && css`
            transform: unset;
        `}
        height: 8vw;
        width: 8vw;
        border-radius: 50%;
        background: aliceblue;
        object-fit: cover;
    }
    .comment-body {
        display: flex;
        align-items: center;
        font: normal min(1.4vw, 24px)/34px 'Montserrat Regular';
        color: #333333;
        letter-spacing: 0.48px;
        width: 200%;
        > img {
            margin-bottom: 5em;
        }
    }
    .comment-from {
        font: normal 17px/36px 'Montserrat Regular';
        color: #222222;
        letter-spacing: 0.34px;
        margin-top: -10px;
    }
    .comment-name {  
        font: normal min(1vw, 19px)/36px 'Montserrat Medium';
        color: #222222;
        letter-spacing: 0.38px;
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
        height: 70vh;
        padding-top: 1em;
        width: 99vw;
        position: relative;
        > div {
            overflow: visible;
        }
    }
    .BrainhubCarouselItem {
        min-width: unset !important;
        ul {
            overflow: initial;
        }
    }
`

export default Comments
