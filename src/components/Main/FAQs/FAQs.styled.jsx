import styled from "styled-components";

export const FAQSection = styled.section`
  padding-bottom: 72px;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding-bottom: 80px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 120px;
  }
`;

export const FAQWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media screen and (min-width: 1440px) {
    gap: 60px;
  }
`;

export const FAQh2 = styled.h2`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.5;
  color: #0b1c24;

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 36px;
  }
`;

export const FAQList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 600px;
  }

  @media screen and (min-width: 1440px) {
    width: 848px;
    gap: 40px;
  }
`;
