import React from "react"
import styled, { css } from "styled-components"
import { flexCenter, Title } from "../const/styleds"
import Logo from "../components/images/logo"
import { LOGOS } from "../const/sections"

const Clients = () => (
    <StyledClients className="main-wide">
        <p><strong>Our Partnes & Clients</strong></p>
        <div>
            {LOGOS.map((logo, i) => (
                    <ImageContainer key={i} i={i}>
                        <Logo className={logo} type={logo} />
                        <p>Learn More</p>
                    </ImageContainer>
            ))}
        </div>
    </StyledClients>
)

const StyledClients = styled.div`
    ${flexCenter}
    margin-top: 5.5em;
    flex-direction: column;
    justify-content: start;
    width: 100%;
    height: 100vh;
    > div {
        ${flexCenter}
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;
        width: auto;
        height: 100vh;
    }
    > p {
        ${Title}
        width: 50%;
    }
`

const ImageContainer = styled.div`
    ${flexCenter}
    justify-content: space-between;
    padding: 20px;
    align-self: flex-end;
    flex-direction: column;
    ${props => [1, 4].includes(props.i) && css`
        align-self: flex-start;
    `}
    width: 15.9vw;
    height: 15.5vw;
    margin: 20px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 10px 24px #99999933;
    border-radius: 8px;
    flex: 0 1 25%;
    transition: all 500ms ease;
    &:hover {
        filter: invert(1);
        transform: scale(0.9);
    }
    > p {
        font: normal 17px/29px 'Poppins Medium';
        letter-spacing: 0px;
        color: #185F7F;
        margin-bottom: 10px;
    }
    > div {
        margin-top: 20px;
        align-self: center;
        width: 62%;
    }
    .mobile {
        width: 22%;
    }
    .kinesis {
        width: 52%;
    }
    .ipass {
        width: 75%;
    }
    .panama {
        margin-top: 3.8em;
    }
`

export default Clients
