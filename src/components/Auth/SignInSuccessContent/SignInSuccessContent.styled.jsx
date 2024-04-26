import styled from "styled-components";

export const SignInSuccessWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding-left: 25px;
  padding-right: 25px;
  margin-top: 96px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

export const SignInSuccessHead = styled.h2`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.5;
  color: #204250;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 38px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 48px;
  }
`;

export const SignInSuccessText = styled.p`
  font-family: Nunito;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  color: #0b1c24;
  margin-bottom: 44px;

  @media screen and (min-width: 768px) {
    width: 343px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 22px;
    width: auto;
  }
`;

export const SVGSuccess = styled.svg`
  margin-bottom: calc(44px - 15px);
`;
