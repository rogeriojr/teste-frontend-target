import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f9;
    color: #333;
  }

  h1, h2, h3 {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: #333;
  }
`;

export default GlobalStyles;
