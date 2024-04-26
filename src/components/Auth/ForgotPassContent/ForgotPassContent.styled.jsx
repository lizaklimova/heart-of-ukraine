import { styled } from "styled-components";

export const ForgotPassWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding-left: 25px;
  padding-right: 25px;
  margin-top: 115px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    padding-left: 0px;
    padding-right: 0px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 285px;
  }
`;

export const ForgotPassHead = styled.h2`
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

export const ForgotPassText = styled.p`
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

export const EmailFormCont = styled.div`
  width: 90%;
  margin-bottom: 35px;

  @media screen and (min-width: 768px) {
    width: 343px;
  }
`;

export const MailSpan = styled.span`
  font-family: Montserrat;
  font-weight: 600;
`;

export const Timer = styled.p`
  font-family: Nunito;
  font-weight: 600;
  font-size: 48px;
  line-height: 0.62;
  color: #0b1c24;
  margin-bottom: 64px;
  margin-top: 30px;
  &.timer-low {
    color: #fe4747;
  }
`;

export const SmallText = styled.p`
  font-family: Nunito;
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  text-align: center;
  color: #000;
  margin-bottom: calc(24px - 15px);
`;
