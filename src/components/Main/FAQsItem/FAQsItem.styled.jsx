import styled from "styled-components";

export const QuestionWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  gap: 12px;

  &.open {
    border-bottom: 1px solid #000;
    padding: 8px 0px;
  }
`;

export const FAQh3 = styled.h3`
  font-family: Nunito;
  font-weight: 500;
  color: #000;
  transition-duration: 0.5s;
  font-size: 18px;
  line-height: 1.389;
  &.open {
    font-size: 26px;
    line-height: 1.5;
  }
  @media screen and (min-width: 1440px) {
    font-size: 28px;
    line-height: 1.5;
    &.open {
      font-size: 32px;
    }
  }
`;

export const SvgWrapButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  padding: 0;
`;

export const ArrowFAQSvg = styled.svg`
  width: 24px;
  height: 24px;
  fill: #0b1c24;
  cursor: pointer;
`;

export const FAQAnswer = styled.p`
  margin-top: 12px;
  font-family: Nunito;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;
  color: #000;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s;

  &.open {
    max-height: 265px;
  }

  @media screen and (min-width: 1440px) {
    font-weight: 500;
    font-size: 22px;
    line-height: 1.5;
  }
`;
