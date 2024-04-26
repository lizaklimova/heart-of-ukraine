import styled from "styled-components";

export const BackBtn = styled.button`
  font-family: Montserrat;
  font-weight: 500;
  line-height: 1;
  display: flex;
  align-items: center;
  gap: 6px;
  color: #a7552b;
  position: absolute;
  top: 24px;
  left: 16px;
  background-color: #efeff5;

  svg {
    fill: transparent;
    stroke: #a7552b;
  }

  @media screen and (min-width: 768px) {
    top: 40px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 22px;
    top: 55px;
  }
`;