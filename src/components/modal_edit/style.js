import styled from "styled-components";

export const StyledHeaderEdit = styled.div`
  width: 100%;
  height: 14%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: #343b41;

  span {
    font-weight: 600;
    font-size: 15px;
    line-height: 19px;
    color: #f8f9fa;
  }

  button {
    background-color: transparent;
    border: none;
    color: #868e96;
    font-size: 18px;
    font-weight: 600;
    line-height: 21px;
  }
`;

export const StyledMainEdit = styled.div`
  width: 100%;
  height: 86%;
  display: flex;
  background-color: #212529;
  padding: 10px 15px;

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }

  form > div > label {
    color: white;
  }

  form > div > .MuiInputLabel-root {
    color: white;
  }
  form > div > div {
    color: white;
  }
`;
