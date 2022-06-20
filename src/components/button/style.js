import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  height: 44px;
  min-height: 40px;
  border-radius: 4px;
  border: none;
  color: #ffffff;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  background-color: ${(props) => props.Backcolor};
`;
