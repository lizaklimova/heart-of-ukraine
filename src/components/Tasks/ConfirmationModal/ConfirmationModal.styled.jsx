import styled, { css } from "styled-components";
import { backdropStyles } from "../SuccessModal/SuccessModal.styled";

const inputStyles = css`
  width: 100%;
  padding: 14px 12px;
  border-radius: 8px;
  border: 2px solid #cde3fa;
  background-color: #f5f5f5;
  color: #0b1c24;
  font-family: Nunito;
  font-size: 16px;
  line-height: 1.25;
`;

export const ConfirmBackdrop = styled.div`
  ${backdropStyles}
`;

export const ConfirmModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  height: 97%;
  max-height: 1126px;
  padding: 100px 40px;
  border-radius: 16px;
  background-color: #f9f9fc;
  overflow-y: auto;
  z-index: 11;

  &::-webkit-scrollbar-track {
    margin: 10px 0;
  }

  @media screen and (min-width: 768px) {
    max-width: 730px;
    padding: 80px 40px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 900px;
    padding: 70px 120px;
  }

  button#close {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: transparent;
    padding: 0;

    svg {
      fill: #a7552b;
      transition: fill 150ms linear;
    }

    &:hover svg,
    &:focus svg {
      fill: #872e00;
    }

    &:active svg {
      fill: #5a1e00;
    }

    @media screen and (min-width: 768px) {
      top: 25px;
      right: 25px;
    }
  }
`;

export const ModalText = styled.p`
  font-family: Nunito;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  margin: 0 auto 40px auto;
  max-width: 311px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    max-width: 471px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 22px;
  }
`;

export const ConfirmForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ConfirmLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: Nunito;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
  color: #415158;

  textarea {
    ${inputStyles}
    height: 144px;
    resize: none;
  }
`;

export const InputField = styled.input`
  ${inputStyles}
`;

export const OpenSelectBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  ${({ $isSelectOpen }) => $isSelectOpen && "transform: rotate(180deg);"}

  &:hover svg,
    &:focus svg {
    fill: #872e00;
  }

  &:active svg {
    fill: #5a1e00;
  }

  svg {
    fill: #a7552b;
    transform: scale(0.7);
    transition: fill 150ms linear;
  }
`;

export const ConfirmSubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  color: #fff;
  width: 100%;
  max-width: 343px;
  padding: 12px 24px;
  margin: 32px auto 0 auto;

  @media screen and (min-width: 768px) {
    margin-top: 26px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 10px;
  }

  &:disabled {
    opacity: 0.6;
  }
`;
