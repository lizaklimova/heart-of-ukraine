import { Link } from "react-router-dom";
import { gradientTextHover } from "src/components/Tasks/Tasks.styled";
import styled from "styled-components";

export const ChangeFormEl = styled.form`
  width: 100%;
  margin-top: 32px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`;

export const InputsCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media screen and (min-width: 1440px) {
    gap: 24px;
  }
`;

export const ChangeInputWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 8px;
`;

export const ChangeLabel = styled.label`
  font-family: Nunito;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
  color: #415158;
`;

export const ChangeInput = styled.input`
  border: 1px solid #787d83;
  border-radius: 8px;
  padding: 14px 12px;
  width: 100%;
  height: 48px;
  background-color: #f5f5f5;

  font-family: Nunito;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #0b1c24;
  transition: border var(--transition-dur-and-func),
    border-color var(--transition-dur-and-func);

  &::placeholder {
    color: #a0a9b4;
  }

  &.invalid {
    border-color: #fe4747;
  }

  &:hover,
  &:focus {
    border: 2px solid #cde3fa;
  }

  &:disabled {
    border: 1px solid #d8dee4;
    color: #a0a9b4;
    cursor: not-allowed;
  }
`;

export const ChangeArea = styled.textarea`
  border: 1px solid #787d83;
  border-radius: 8px;
  padding: 12px;
  height: 100px;
  width: 100%;
  background-color: #f5f5f5;
  resize: none;

  font-family: Nunito;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #0b1c24;
  transition: border var(--transition-dur-and-func),
    border-color var(--transition-dur-and-func);

  &::placeholder {
    color: #a0a9b4;
  }

  &.invalid {
    border-color: #fe4747;
  }

  &:hover,
  &:focus {
    border: 2px solid #cde3fa;
  }

  &:disabled {
    border: 1px solid #d8dee4;
    color: #a0a9b4;
    cursor: not-allowed;
  }
`;

export const ChangeErrorText = styled.p`
  font-size: 14px;
  color: #fe4747;
`;

export const ChangePasswordLink = styled(Link)`
  display: inline-block;
  text-align: left;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  font-style: normal;
  padding: 0;
  margin-top: 20px;
  color: transparent;
  background: linear-gradient(
    90deg,
    rgba(200, 81, 32, 1) 0%,
    rgba(255, 165, 2, 1) 100%
  );
  background-clip: text;
  ${gradientTextHover}

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 24px;
  }
`;

export const ChangeBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin-top: 56px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
    width: 659px;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const ChangeSubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  width: 90%;
  border-radius: 12px;
  padding: 12px 24px;
  margin: 0 auto;
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
    font-size: 18px;
    line-height: 1.22;
    width: 343px;
  }
`;

export const ChangeCancelBtn = styled.button`
  border: 2px solid #c2ced8;
  display: flex;
  justify-content: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  width: 90%;
  border-radius: 12px;
  padding: 12px 24px;
  margin: 0 auto;
  color: #707aa7;
  transition: color var(--transition-dur-and-func),
    border var(--transition-dur-and-func),
    background-color var(--transition-dur-and-func);

  &:hover,
  &:focus {
    border: 2px solid #707aa7;
  }

  &:active {
    border: 2px solid #c2ced8;
    background-color: #c2ced8;
  }

  &:disabled {
    color: #dbdbdb;
    border: 2px solid #dbdbdb;
    cursor: not-allowed;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.22;
    width: 343px;
  }

  @media screen and (min-width: 1440px) {
    width: 284px;
  }
`;
