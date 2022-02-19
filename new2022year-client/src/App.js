import styled from "styled-components";

function App() {
  return <Container>{/* 덕담 하나 주면 안 잡아 먹지! */}</Container>;
}

const Container = styled.div`
  background-color: green;
  width: 100vw;
  max-width: 450px;
  height: 100vh;
  background-image: url("https://2022-01-newyear.s3.ap-northeast-2.amazonaws.com/bg_default.png");
  background-position: center;
  background-size: cover;
  margin: auto;
`;

export default App;