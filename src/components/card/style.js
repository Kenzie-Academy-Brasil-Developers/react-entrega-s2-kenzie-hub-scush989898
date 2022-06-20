import styled from "styled-components";

export const StyledCard = styled.li`
  width: 100%;
  height: 56px;
  background: #121214;
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  gap: 2%;

  :hover {
    background-color: #343b41;
  }
  .title {
    width: 48%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .title > p {
    font-weight: 700;
    font-size: 15px;
    line-height: 24px;
    color: #f8f9fa;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .status {
    width: 22%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .status > span {
    font-weight: 400;
    font-size: 11px;
    line-height: 22px;
    color: #868e96;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .optCard {
    width: 26%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .btnIcon {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
