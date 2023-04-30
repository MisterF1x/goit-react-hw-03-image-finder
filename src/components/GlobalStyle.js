import { css } from '@emotion/react';
import 'modern-normalize';

export const Style = css`
  html {
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    color: #212121;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p,
  h1,
  h2 {
    margin: 0;
  }
  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
