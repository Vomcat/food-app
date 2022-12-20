import { css } from "styled-components";

export const respondFrom = (breakpoints: number) => {
  return (literals: TemplateStringsArray, ...placeholders: any[] ) =>
    css`@media screen and (min-width: ${breakpoints}px)  { ${css(literals, ...placeholders)} }`;
};

export const respondTo = (breakpoints: number) => {
  return (literals: TemplateStringsArray, ...placeholders: any[] ) =>
    css`@media screen and (max-width: ${breakpoints}px)  { ${css(literals, placeholders)} }`;
};

export const baseShadow = css`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

