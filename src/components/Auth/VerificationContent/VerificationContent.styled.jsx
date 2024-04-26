import styled from "styled-components";

export const VerificationWrap = styled.div`
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

export const VerificationHead = styled.h2`
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

export const VerificationText = styled.p`
  font-family: Nunito;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  color: #0b1c24;
  margin-bottom: 64px;

  @media screen and (min-width: 768px) {
    width: 343px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 22px;
    width: 613px;
  }
`;

export const MailSpan = styled.span`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 16px;

  @media screen and (min-width: 1440px) {
    font-size: 22px;
  }
`;
