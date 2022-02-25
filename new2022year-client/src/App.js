import styled from "styled-components";

function App() {
  return (
    <Container>
      <div className='title'>
        <h1>덕담 하나 주면 안 잡아 먹지!</h1>
        <p>
          {user}님이 받은 덕담: <span>{count}개</span>
        </p>
      </div>
    </Container>
  );
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
  .title {
    background-color: green;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5vh;
    color: #3f3732
    h1 {
      font-size: 22px;
      background-color: #fff;
      padding: 8px 16px;
      border-radius: 16px;
      margin-bottom: 16px;
      p {
        font-size: 18px;
        span {
          font-size: 22px;
        }
      }
    }
  }
`;

export default App;
