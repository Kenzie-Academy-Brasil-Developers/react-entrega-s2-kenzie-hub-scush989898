import React from "react";
import { StyledButton } from "./style";

export default function Button(props) {
  return (
    <StyledButton onClick={props.func} Backcolor={props.Backcolor}>
      {props.children}
    </StyledButton>
  );
}
