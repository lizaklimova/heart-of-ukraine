import { styled } from "styled-components";

export const RecoveryPassWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding-left: 25px;
  padding-right: 25px;
  margin-top: 115px;
  margin-bottom: 16px;

  @media screen and (min-width: 1440px) {
    margin-top: 225px;
  }
`;

export const RecoveryPassHead = styled.h2`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 26px;
  line-height: 1.5;
  color: #204250;
  margin-bottom: 16px;

  @media screen and (min-width: 1440px) {
    font-size: 36px;
  }
`;

export const RecoveryPassText = styled.p`
  font-family: Nunito;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  color: #0b1c24;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    width: 343px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 22px;
    width: 613px;
  }
`;

export const PassFormCont = styled.div`
  width: 90%;
  margin-bottom: 35px;

  @media screen and (min-width: 768px) {
    width: 343px;
  }
`;
