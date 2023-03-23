import { css } from '@emotion/react';

export const GlobalStyles = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  div.react-datepicker__day.react-datepicker__day--selected.react-datepicker__day--today,
  div.react-datepicker__day.react-datepicker__day--selected {
    background: #ff751d;
  }

  div.react-datepicker__input-container input.css-skgz4h {
    background-color: transparent;
  }
`;
