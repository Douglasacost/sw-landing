import { css, createGlobalStyle } from "styled-components";
import * as fonts from "./fonts";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Poppins Medium";
        font-style: normal;
        font-weight: normal;
        src: local("Poppins Medium"), url(${fonts.PoppinsMedium}) format("truetype");
    }
    @font-face {
        font-family: "Poppins Regular";
        font-style: normal;
        font-weight: normal;
        src: local("Poppins Regular"), url(${fonts.PoppinsRegular}) format("truetype");
    }
    @font-face {
        font-family: "Montserrat Regular";
        font-style: normal;
        font-weight: normal;
        src: local("Montserrat Regular"), url(${fonts.MontserratRegular}) format("truetype");
    }
`

export const flexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktopN: '2050px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    maxLaptop: `(max-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktopN})`,
    desktopL: `(min-width: ${size.desktop})`
};

export const HideOnSmallDevices = css`
@media ${device.maxLaptop} {
    display: none;
}
`

export const FontSize = css`
font-size: 14px;
@media ${device.laptopL} {
    font-size: max(0.8vw, 14px);
}

@media ${device.desktop} {
    font-size: 18px;
}
`

export const RemoveLayoutRules = css`
    margin: 0;
    max-width: auto;
    padding: 0;
`