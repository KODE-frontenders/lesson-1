import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.sizeGrid.double}px;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ModalTemplate = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};
