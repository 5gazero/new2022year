import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
@font-face {
  font-family: 'twaysky';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_tway@1.0/twaysky.woff') format('woff');
}
* {
  box-sizing: border-box;
}
body {
  font-family: 'twaysky';
}
`;

export default GlobalStyle;
