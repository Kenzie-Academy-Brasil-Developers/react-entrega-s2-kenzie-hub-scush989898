import styled from "styled-components";

export const StyledRegister = styled.div`
  padding: 13px;
  width: 100vw;
  height: auto;
  background-color: #121214;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 80px;
  margin-bottom: 20px;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7vh;
  }

  header > button {
    height: 70%;
    width: 23%;
    background: #212529;
    border-radius: 4px;
    color: #f8f9fa;
    border: none;
    font-weight: 600;
    font-size: 12px;
  }

  form {
    border-radius: 6px;
    background-color: #212529;
    width: 100%;
    height: auto;
    padding: 34px 14px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    align-items: center;
  }
  form > h4 {
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #f8f9fa;
    margin-bottom: 10px;
  }

  form > h6 {
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 13px;
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
  form > div > div > div {
    color: white;
  }
`;
