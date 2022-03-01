import { useState } from "react";
import styled from "styled-components";

function App() {
  const [clicked, setClicked] = useState(false);
  const modalHandler = () => {
    // console.log("clicked!");
    setClicked(true);
  };

  return (
    <Container>
      <div className='title'>
        <h1>HAPPY 2022</h1>
        <h2>새해 덕담을 주고받아보세요!</h2>
      </div>
      <div className='boxContainer'>
        <div className='box'>
          복
          {/* <img
            onClick={modalHandler}
            src='https://2022-01-newyear.s3.ap-northeast-2.amazonaws.com/object3.png'
          /> */}
        </div>
      </div>
      <div className='btnContainer'>
        <div className='btn'>시작하기</div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fed63e;
  width: 100vw;
  max-width: 450px;
  height: 100vh;
  /* background-image: url("https://2022-01-newyear.s3.ap-northeast-2.amazonaws.com/bg_default.png"); */
  background-position: center;
  background-size: cover;
  margin: auto;
  display: flex;
  flex-direction: column;
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5vh;
    color: #cf452a;
  }
  h1 {
    font-size: 45px;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 16px;
    margin-bottom: 16px;
  }
  h2 {
    font-size: 22px;
  }
  .boxContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
  }
  .box {
    background-color: #ffe380;
    width: 400px;
    height: 400px;
    border-radius: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 7px 7px 15px 4px rgba(0, 0, 0, 0.3);
    font-size: 130px;
    color: #cf452a;
  }
  .btnContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }
  .btn {
    width: 400px;
    height: 80px;
    background-color: #fed63e;
    border: 5px solid #cf452a;
    color: #cf452a;
    font-size: 30px;
    border-radius: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    /* position: fixed;
    bottom: 16px;
    left: calc(50% - 150px); */
  }
`;

export default App;
