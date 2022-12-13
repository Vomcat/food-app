import { css } from "styled-components";

export const respondFrom = (breakpoints: number) => {
  return (style: any) =>
    `@media screen and (min-width: ${breakpoints}px)  { ${style} }`;
};

export const respondTo = (breakpoints: number) => {
  return (style: any) =>
    `@media screen and (max-width: ${breakpoints}px)  { ${style} }`;
};

export const baseShadow = css`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;
