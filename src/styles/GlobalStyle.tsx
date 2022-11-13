import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::before, *::after {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Pretendard', sans-serif;
  }

  &:link, &:visited {
    color: inherit;
    text-decoration: none;
  }
`;
