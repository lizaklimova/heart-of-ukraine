import styled from "styled-components";

export const Title = styled.h2`
  font-family: Nunito;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  color: #0b1c24;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    font-family: Montserrat;
    font-size: 26px;
    font-weight: 600;
  }

  @media screen and (min-width: 1440px) {
    font-size: 40px;
    margin-bottom: 64px;
  }
`;
