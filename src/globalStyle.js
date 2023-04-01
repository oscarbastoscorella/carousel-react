import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
body {
  font-family: "Lato", sans-serif;
  font-size: 16px;
  margin: 0;
  padding: 0;
  user-select: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}
`;

export default Global;
