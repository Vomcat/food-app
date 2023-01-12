import { css } from "styled-components";
import { colors, fonts } from "./variables";

export const respondFrom = (breakpoints: number) => {
  return (literals: TemplateStringsArray, ...placeholders: any[]) =>
    css`
      @media screen and (min-width: ${breakpoints}px) {
        ${css(literals, ...placeholders)}
      }
    `;
};

export const respondTo = (breakpoints: number) => {
  return (literals: TemplateStringsArray, ...placeholders: any[]) =>
    css`
      @media screen and (max-width: ${breakpoints}px) {
        ${css(literals, placeholders)}
      }
    `;
};

export const baseShadow = css`
  box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.1);
`;

export const errorText = css`
  color: ${colors.red};
  text-decoration: underline;
  font-size: 14px;
  font-family: ${fonts.secondary};
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;
