import styled from "styled-components";

export const ShowBtn = styled.button`
  position: absolute;
  top: 37px;
  right: 12px;
  padding: 0;
  background-color: transparent;
  ${({ $variant }) => $variant === "changePwd" && "top: 41px;"}

  svg {
    fill: #0b1c24;
  }

  @media screen and (min-width: 768px) {
    top: 41px;

    ${({ $variant }) => $variant === "changePwd" && "top: 42px;"}
  }
`;
