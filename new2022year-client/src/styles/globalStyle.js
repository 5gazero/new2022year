import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
@font-face {
  font-family: 'Cafe24Ssurround';
  src: url('https://2022-01-newyear.s3.ap-northeast-2.amazonaws.com/Cafe24Ssurround.woff') format('woff');
}
* {
  box-sizing: border-box;
}
body {
  font-family: 'Cafe24Ssurround';
}
`;

export default GlobalStyle;
