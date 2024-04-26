import { Link } from 'react-router-dom';
import { gradientTextHover } from 'src/components/Tasks/Tasks.styled';
import { styled } from 'styled-components';

export const ButtonCloseModal = styled.button`
  display: flex;
  position: absolute;
  top: 16px;
  right: 24px;
  padding: 0;
  cursor: pointer;
`;

export const ModalContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;

  @media screen and (min-width: 768px) {
    gap: 62px;
  }

  @media screen and (min-width: 1440px) {
    gap: 72px;
  }
`;

export const ModalTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 0 11px;

  @media screen and (min-width: 768px) {
    padding: 0;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 15px;
  }
`;

export const ModalHeader = styled.h2`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.5;
  color: #204250;

  @media screen and (min-width: 768px) {
    font-size: 38px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 48px;
  }
`;

export const ModalText = styled.p`
  font-family: Nunito;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  color: #0b1c24;

  @media screen and (min-width: 768px) {
    line-height: 1.38;
  }

  @media screen and (min-width: 1440px) {
    font-size: 22px;
  }
`;

export const ModalBtnsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    gap: 24px;
  }
`;

export const CancelBtn = styled(Link)`
  display: flex;
  justify-content: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  width: 100%;
  border-radius: 12px;
  padding: 12px 24px;

  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(200, 81, 32, 1) 0%,
    rgba(255, 165, 2, 1) 100%
  );

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.22;
    width: 343px;
  }
`;

export const ReturnBtn = styled.button`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  font-style: normal;
  padding: 0;
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
    line-height: 1.22;
  }
`;