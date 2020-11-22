import React from "react";
import styled from "styled-components";
import { Header } from "components/templates/header/header";
import { Body } from "components/templates/body/body";

const PageWrapper = styled.div`
  padding: ${({ theme }) => theme.sizeGrid.double}px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: hidden;
  width: 100%;
`;

export const PageTemplate = ({ children, title, linkTo }) => {
  return (
    <PageWrapper>
      <Header title={title} linkTo={linkTo} />
      <Body>{children}</Body>
    </PageWrapper>
  );
};
