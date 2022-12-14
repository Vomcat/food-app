import { createGlobalStyle } from "styled-components";

import { colors, dimensions, fonts } from "./index";

import montserrat from "../assets/fonts/montserrat/Montserrat-Medium.ttf";
import montserratBold from "../assets/fonts/montserrat/Montserrat-Bold.ttf";
import roboto from "../assets/fonts/roboto/Roboto-Medium.ttf";
import robotoItalic from "../assets/fonts/roboto/Roboto-Italic.ttf";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Montserrat;
    font-weight: normal;
    src: url(${montserrat}) format("truetype");
  }

  @font-face {
    font-family: Montserrat Bold;
    font-weight: bold;
    src: url(${montserratBold}) format("truetype");
  }

  @font-face {
    font-family: Roboto;
    font-weight: normal;
    src: url(${roboto}) format("truetype");
  }

  @font-face {
    font-family: Roboto Italic;
    font-weight: normal;
    font-style: italic;
    src: url(${robotoItalic}) format("truetype");
  }

  *, *:before, *:after{
    box-sizing: border-box;
}

html, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: Roboto;
    vertical-align: baseline;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    text-size-adjust: none;
}

html{
  font-size: ${dimensions.fonts.regular}px;
}

body{
  font-family: ${fonts.primary};
  line-height: 1;
  color: ${colors.dark};
  background-color: ${colors.white};
  padding-top: 61px;
}

h1,
h2,
h3,
h4 {
  font-family: ${fonts.secondaryBold};
}

p {
  &.italic {
    font-family: ${fonts.primaryItalic};
  }
}

input{
  font-size: ${dimensions.fonts.small}px;
  color: ${colors.darkGrey};

  &::placeholder {
    font-family: ${fonts.primaryItalic};
  }
}

footer, header, nav, section, main{
    display: block;
}

ol, ul{
    list-style: none;
}

blockquote, q{
    quotes: none;
}

blockquote:before, blockquote:after, q:before, q:after{
    content: '';
    content: none;
}

table{
    border-collapse: collapse;
    border-spacing: 0;
}

input{
    -webkit-appearance: none;
    border-radius: 0;
}
`;
