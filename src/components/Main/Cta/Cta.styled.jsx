import styled from "styled-components";
import { Link } from "react-router-dom";

export const CtaSection = styled.section`
  padding-bottom: 78px;

  @media screen and (min-width: 768px) {
    padding-bottom: 112px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 180px;
  }

  @media screen and (min-width: 1920px) {
    padding-bottom: 184px;
  }
`;

export const CtaCont = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    margin: 0px 25px;
  }
`;

export const CtaCard = styled.div`
  margin: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CtaHead = styled.h3`
  text-align: center;
  font-family: Nunito;
  font-size: 21px;
  font-weight: 700;
  line-height: normal;
  color: #053041;
  margin: 26px 0 28px 0;

  @media screen and (min-width: 1440px) {
    font-size: 38px;
  }
`;

export const CtaImg = styled.img`
  border-radius: 50%;
  width: 65%;

  @media screen and (min-width: 768px) {
    width: 75%;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
  }
`;

export const CtaLink = styled(Link)`
  display: flex;
  justify-content: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  width: 90%;
  max-width: 321px;
  border-radius: 12px;
  padding: 12px 24px;
  margin: 44px auto 32px auto;
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(200, 81, 32, 1) 0%,
    rgba(255, 165, 2, 1) 100%
  );

  &:disabled {
    cursor: not-allowed;
    opacity: 0.57;
  }

  @media screen and (min-width: 768px) {
    width: 75%;
    max-width: unset;
  }

  @media screen and (min-width: 1440px) {
    width: 60%;
  }
`;

export const CtaArrowCont = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
