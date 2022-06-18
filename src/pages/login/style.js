import styled from "styled-components";

export const StyledLogin = styled.div`
  padding: 13px;
  width: 100vw;
  height: 100vh;
  background-color: #121214;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 25px;

  .form {
    border-radius: 6px;
    background-color: #212529;
    width: 100%;
    height: 65%;
    padding: 34px 14px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }

  form {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  form > h4 {
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: #f8f9fa;
    margin-bottom: 20px;
  }

  .form > h5 {
    margin-top: 30px;
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    color: #868e96;
  }

  form > div {
    width: 100%;
  }

  form > div > label {
    color: #f8f9fa;
  }

  form > div > div > input {
    color: #f8f9fa;
  }
`;
