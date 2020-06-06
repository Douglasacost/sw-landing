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
`

export const flexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`