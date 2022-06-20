import styled from "styled-components";

export const StyledDashboard = styled.div`
  width: 100%;
  max-width: 1100px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 13px;

  header {
    margin-top: 7px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 9vh;
    align-items: center;
    padding-bottom: 5px;
    border-bottom: 2px solid #212529;
  }
  header > button {
    height: 38px;
    background: #212529;
    border-radius: 4px;
    border: none;
    width: 22%;
    max-width: 150px;
    font-weight: 600;
    font-size: 14px;
    line-height: 28px;
    color: #f8f9fa;
  }

  .userInfo {
    display: flex;
    flex-direction: column;
    gap: 13px;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 18vh;
    border-bottom: 2px solid #212529;
  }

  .userInfo > h3 {
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    color: white;
  }
  .userInfo > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #868e96;
  }

  @media (min-width: 700px) {
    .userInfo {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    .userInfo > h3 {
      font-size: 23px;
    }
    .userInfo > p {
      font-size: 18px;
    }
  }

  main {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
  }

  .createTech {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    width: 100%;
  }

  .createTech > span {
    font-weight: 600;
    font-size: 19px;
    line-height: 18px;
    color: #f8f9fa;
  }

  .createTech > button {
    width: 36px;
    height: 36px;
    background: #212529;
    border-radius: 4px;
    font-size: 26px;
    color: #ffffff;
    border: none;
  }

  main > ul {
    width: 100%;
    height: auto;
    padding: 30px 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #212529;
    border-radius: 4px;
    gap: 17px;
  }
`;
