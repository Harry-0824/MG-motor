import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #fff;
    overflow-x: hidden;
  }

  h1, h2, h3 {
    color: #333;
  }

  a {
    text-decoration: none;
    color: #1A1A2E;
  }

  a:hover {
    text-decoration: underline;
  }

  .container {
    padding: 20px;
  }

  .button {
    background-color: #CC0000;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  }

  .button:hover {
    background-color: #a30000;
  }
`;

export default GlobalStyle;
