import styled from "styled-components";

export const RequirWrap = styled.div`
  position: absolute;
  top: ${({ $variant }) => ($variant === "changePwd" ? "78px" : "73px")};
  margin: 5px 0 5px 0;
  width: 100%;

  @media screen and (min-width: 1440px) {
    top: ${({ $variant }) => ($variant === "changePwd" ? "78px" : "75px")};
  }
`;

export const ShowRequirementsBtn = styled.button`
  padding: 0;
  background-color: transparent;

  &:hover + ul,
  &:focus + ul {
    visibility: visible;
    opacity: 1;
  }

  & > svg {
    stroke: #666c6f;
    fill: #666c6f;
  }

  &.invalid > svg {
    stroke: #fe4747;
    fill: #fe4747;
  }
`;

export const RequirList = styled.ul`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-width: 100%;
  border-radius: 0px 18px 18px 18px;
  border: 1px solid #c2ced8;
  background-color: #f5f5f5;
  padding: 16px;
  z-index: 2;
  transition: opacity 150ms linear, visibility 150ms linear;

  &:hover {
    visibility: visible;
    opacity: 1;
  }

  li {
    display: flex;
    justify-content: space-between;
    gap: 12px;
  }

  li p {
    color: #666c6f;
    font-size: 14px;
    line-height: normal;

    &.invalid {
      color: #fe4747;
    }
  }
`;
