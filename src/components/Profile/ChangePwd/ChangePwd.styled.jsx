import styled from "styled-components";

export const ChangePwdSection = styled.section`
  padding: 32px 0 90px 0;

  @media screen and (min-width: 768px) {
    padding-top: 54px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 0 108px 0;
    margin: 0 auto;
  }
`;

export const TitleText = styled.h3`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    font-size: 26px;
    font-weight: 600;
    line-height: 1.5;
    color: #0b1c24;
    text-align: center;
    margin: 0 auto 18px auto;
  }
`;

export const ChangeText = styled.p`
  font-family: Nunito;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  max-width: 297px;
  margin: 0 auto 32px auto;
  color: #000;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 24px;
  }
`;

export const ChangeForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 383px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 399px;
  }

  @media screen and (min-width: 1440px) {
    width: 605px;
    max-width: unset;
  }
`;

export const ChangeLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  font-family: Nunito;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
  color: #415158;

  input {
    width: 100%;
    border-radius: 8px;
    padding: 14px 12px;
    border: 1px solid #d8dee4;
    background-color: #f5f5f5;
    padding-right: 45px;
    transition: border 150ms linear;

    &#newPassword {
      margin-bottom: 18px;
    }

    &:hover,
    &:focus {
      border: 2px solid #cde3fa;
    }
  }
`;

export const SaveChangesBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: #fff;
  width: 100%;
  max-width: 321px;
  padding: 12px 24px;
  margin: 0 auto;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.57;
  }

  @media screen and (min-width: 768px) {
    max-width: 343px;
    font-size: 18px;
  }
`;
