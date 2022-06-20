import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  text-decoration: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: #f8f9fa;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  font-style: normal;
}
.App {
  text-align: center;
  background-color: #121214;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  cursor: pointer;
}

li,
ol,
ul {
  list-style-type: none;
}

`;
