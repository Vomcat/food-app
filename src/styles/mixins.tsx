export const respondFrom = (breakpoints: number) => {
  return (style: any) =>
    `@media screen and (min-width: ${breakpoints}px)  { ${style} }`;
};

export const respondTo = (breakpoints: number) => {
  return (style: any) =>
    `@media screen and (max-width: ${breakpoints}px)  { ${style} }`;
};
