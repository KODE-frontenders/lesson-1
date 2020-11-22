import React from "react";
import styled from "styled-components";
import { IconLink } from "components/molecules/icon-link/icon-link";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledHeading = styled.h1`
  font-size: 32px;
  font-weight: normal;
  margin: ${({ theme }) => theme.sizeGrid.double};
`;

export const Header = ({ title, linkTo }) => {
  return (
    <StyledHeader>
      <StyledHeading>{title}</StyledHeading>
      <IconLink route={linkTo} />
    </StyledHeader>
  );
};
