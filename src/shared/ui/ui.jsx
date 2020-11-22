import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RowSpaceBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ToggleSwitch = styled.input.attrs(() => ({
  type: "checkbox",
}))`
  appearance: none;
  cursor: pointer;
  position: relative;

  &:before {
    right: 0;
    background-color: ${({ theme }) => theme.colors.gray};
    width: ${({ theme }) => theme.sizeGrid.quadruple}px;
    height: ${({ theme }) => theme.sizeGrid.double}px;
    content: "";
    position: absolute;
    display: block;
    border-radius: 8px;
  }

  &:after {
    right: 0;
    background-color: ${({ theme }) => theme.colors.background};
    width: ${({ theme }) => theme.sizeGrid.double}px;
    height: ${({ theme }) => theme.sizeGrid.double}px;
    border-color: ${({ theme }) => theme.colors.gray};
    transform: ${({ checked }) =>
      checked ? "translateX(-16px)" : "translateX(0)"};
    content: "";
    display: block;
    position: absolute;
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-radius: 50%;
    transition: transform ease-out 0.3s;
  }
`;
