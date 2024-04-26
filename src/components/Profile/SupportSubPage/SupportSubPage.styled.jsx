import styled from "styled-components";

export const SupportSection = styled.section`
  padding: 24px 0 100px 00;
  margin: 0 auto;

  h3 {
    text-align: center;
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5;
    color: #000;
    max-width: 360px;
    margin: 0 auto 32px auto;
  }

  @media screen and (min-width: 768px) {
    padding: 32px 0 112px 00;

    h3 {
      max-width: 637px;
      margin-bottom: 50px;
    }
  }

  @media screen and (min-width: 1440px) {
    padding: 16px 0 100px 00;

    h3 {
      max-width: 762px;
      font-size: 22px;
    }
  }
`;

export const SupportForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 360px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 593px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 659px;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-family: Nunito;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.25;
    color: #415158;
    width: 100%;
    margin-bottom: 42px;

    @media screen and (min-width: 768px) {
      margin-bottom: 68px;
    }

    @media screen and (min-width: 1440px) {
      margin-bottom: 104px;
    }

    textarea {
      border-radius: 8px;
      border: 1px solid #787d83;
      background: #f5f5f5;
      resize: none;
      width: 100%;
      height: 272px;
      padding: 12px;

      @media screen and (min-width: 768px) {
        height: 144px;
      }

      &::placeholder {
        font-family: Nunito;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.25;
        color: #0b1c24;
      }
    }
  }

  p {
    text-align: center;
    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.25;
    color: #000;
    margin: 0 auto 32px auto;
    max-width: 368px;

    span {
      font-weight: 700;
    }

    @media screen and (min-width: 768px) {
      max-width: 596px;
    }

    @media screen and (min-width: 1440px) {
      max-width: 659px;
    }
  }
`;

export const SupportSubmitBtn = styled.button`
  display: block;
  width: 100%;
  max-width: 321px;
  padding: 12px 24px;
  margin: 0 auto;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media screen and (min-width: 768px) {
    max-width: 343px;
    font-size: 18px;
  }
`;

export const SuccessfullySentBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
