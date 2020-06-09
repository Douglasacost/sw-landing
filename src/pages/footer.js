import React from "react"
import styled from "styled-components"
import { flexCenter } from "../const/styleds"
import FooterBg from "../components/images/footer-bg"
import Logo from "../components/images/logo"
import Facebook from '../images/facebook.svg'
import Instagram from '../images/instagram.svg'
import Skype from '../images/skype.svg'
import Linkedin from '../images/linkedin.svg'

const Footer = () => {
    return (
        <StyledFooter>
            <Logo className="logo" />
            <StyledContent>
                <div>
                    
                </div>
            </StyledContent>
            <FooterBg className="footer-bg" />
        </StyledFooter>
    )
}

const Padding = styled.div`
    width: 100%;
    flex: 1 1 50%;
`

const StyledContent = styled.div`
    ${flexCenter}
`

const StyledFooter = styled.div`
    ${flexCenter}
    margin-top: 5.5em;
    padding-top: 2em;
    flex-direction: column;
    justify-content: start;
    width: 100%;
    margin 0 auto;
    height: 75vh !important;
    position: relative;
    .footer-bg {
        width: 100%;
        position: absolute !important;
        bottom: 0;
    }
    .logo {
        width: 400px;
    }
`

export default Footer
