import React from "react"
import styled from "styled-components"
import HomeImage from "../components/images/home-image"
import { flexCenter } from "../const/styleds"
import Button from "../components/button"

const homeMessage = "a brand new way to see the world"

const Home = () => (
    <div>
        <StyledHome>
            <ImageContainer><HomeImage /></ImageContainer>
            <p>{homeMessage}</p>
            <ButtonContainer>
                <Button>Our Works</Button>
                <Button variant="light">Know More</Button>
            </ButtonContainer>
        </StyledHome>
    </div>
)

const ButtonContainer = styled.div`
    ${flexCenter}
    > button {
        margin: 0 16px;
    }
`

const StyledHome = styled.div`
    ${flexCenter}
    justify-content: start;
    flex-direction: column;
    width: 100%;
    height: 95vh;
    > div {
        width: 100%;
    }

    > div:first-child {
        margin: 8vh 0;
    }

    > p {
        text-transform: capitalize;
        font: bold 48px/66px 'Poppins Medium';
        letter-spacing: 1px;
        width: 500px;
        text-align: center;
    } 
`

const ImageContainer = styled.div`
    ${flexCenter}
    > div {
        width: 50%;
    }
`

export default Home
