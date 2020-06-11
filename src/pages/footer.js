import React from "react"
import styled from "styled-components"
import { flexCenter } from "../const/styleds"
import FooterBg from "../components/images/footer-bg"
import Logo from "../components/images/logo"
import Facebook from '../images/facebook.svg'
import Instagram from '../images/instagram.svg'
import Skype from '../images/skype.svg'
import Linkedin from '../images/linkedin.svg'
import { FOOTER } from "../const/sections"

const ICONS = [
    { icon: 'facebook', path: Facebook },
    { icon: 'skype', path: Skype },
    { icon: 'linkedin', path: Linkedin },
    { icon: 'instagram', path: Instagram },
]

const Footer = () => {
    return (
        <StyledFooter>
            <Logo className="logo" />
            <StyledContent>
                {FOOTER.map((item, i) => {
                    return (
                        <div key={i}>
                            <p>{item.title}</p>
                            {item.links.map(link => {
                                return (
                                    <p key={link}>{link}</p>
                                )
                            })}
                            {item.title === "Address" && (
                                <IconsContent>
                                    <p>Follow Us</p>
                                    <div>
                                        {ICONS.map((item, j) => (
                                            <div key={j} className={item.icon}>
                                                <img alt={item.icon} src={item.path} />
                                            </div>
                                        ))}
                                    </div>
                                </IconsContent>
                            )}
                        </div>
                    )
                })}
            </StyledContent>
            <FooterBg className="footer-bg" />
        </StyledFooter>
    )
}

const IconsContent = styled.div`
    > p:first-child {
        text-align: left;
        font: normal 18px/27px "Poppins Medium";
        letter-spacing: 0px;
        color: #101C21;
        margin-bottom: 10px;
        cursor: auto;
    }
    > div{
        display: flex;
        justify-content: space-between;
        > div {
            transition: all 500ms ease;
            cursor: pointer;
            &:hover, &:active {
                box-shadow: 4px 5px 10px #99999933;
                border: 0.5px solid aliceblue;
            }
            >img {
                margin: 0;
            }
            border-radius: 50%;
            margin-right: 22px;
            ${flexCenter}
            height: 50px;
            width: 50px;
        }
    } 
    .facebook {
        background: transparent linear-gradient(45deg, #6362D7 0%, #FF8FE2 100%) 0% 0% no-repeat padding-box;
    }
    .instagram {
        background: transparent linear-gradient(47deg, #F09376 0%, #F0DB79 100%) 0% 0% no-repeat padding-box;
    }
    .skype {
        background: transparent linear-gradient(23deg, #00B56C 0%, #1DBE75 22%, #68D58C 68%, #9EE69D 100%) 0% 0% no-repeat padding-box;
    }
    .linkedin {
        background: transparent linear-gradient(90deg, #FF9AB6 0%, #F03295 99%, #F03295 100%) 0% 0% no-repeat padding-box;
    }
`

const StyledContent = styled.div`
    margin-top: 3em;
    z-index: 2;
    width: 70vw;
    ${flexCenter}
    justify-content: space-between;
    align-items: baseline;
    > div {
        p {
            text-align: left;
            font: normal 15px/32px "Poppins Regular";
            letter-spacing: 0px;
            color: #777777;
            margin-bottom: 8px;
            &:hover {
                cursor: pointer;
                color: aliceblue;
            }
        }
        > p:first-child {
            text-align: left;
            font: normal 18px/27px "Poppins Medium";
            letter-spacing: 0px;
            color: #101C21;
            margin-bottom: 2em;
            cursor: auto;
        }
        width: 25%;
    }
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
