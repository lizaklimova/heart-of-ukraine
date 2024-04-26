import styled from "styled-components";

export const AuthWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 16px;

  @media screen and (min-width: 393px) {
    width: 393px;
  }

  @media screen and (min-width: 768px) {
    width: 423px;
    padding-top: 30px;
  }

  @media screen and (min-width: 1440px) {
    position: static;
    padding-top: 69px;
    width: ${({ $variant }) => ($variant === "register" ? "700px" : "471px")};
  }
`;

export const ScrollContainer = styled.div`
  min-height: 100vh;
  position: relative;

  @media screen and (min-width: 768px) {
    max-height: 100vh;
    padding-top: 20px;
    overflow-y: auto;
  }
`;

export const AuthForm = styled.form`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 12px;
  }

  @media screen and (min-width: 1440px) {
    ${({ $variant }) =>
      $variant === "register" &&
      `flex-direction: row;
      flex-wrap: wrap;`}
  }
`;

export const AuthLabel = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.43;
  color: #415158;
  margin-bottom: 8px;
  gap: 4px;

  &.passwordLabel {
    position: relative;

    @media screen and (min-width: 1440px) {
      margin: unset;
    }
  }

  &#repeat-password {
    margin-top: 10px;

    @media screen and (min-width: 1440px) {
      margin: unset;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    width: ${({ $variant }) =>
      $variant === "register" ? "calc((100% - 16px) / 2)" : "100%"};
  }
`;

export const AuthInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #d8dee4;
  padding: 14px 12px;
  background-color: #f5f5f5;
  color: #0b1c24;

  &[type="password"] {
    font-weight: 700;

    &::-webkit-credentials-auto-fill-button {
      visibility: hidden !important;
      pointer-events: none !important;
    }

    &::placeholder {
      font-weight: 400;
    }
  }

  &.password,
  &.confirm-password,
  &.sign-in-password {
    padding-right: 40px;
  }

  &::placeholder {
    color: #a0a9b4;
  }

  &.invalid {
    border-color: #fe4747;
  }
`;

export const AuthErrorText = styled.p`
  font-size: 14px;
  color: #fe4747;
`;

export const AuthSubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  width: 90%;
  border-radius: 12px;
  padding: 12px 24px;
  margin: 15px auto 32px auto;
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
    margin-bottom: 26px;
    width: 343px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 28px;
    max-height: 46px;
  }
`;

export const LoginTextBlock = styled.div`
  margin-top: 70px;
  margin-bottom: 34px;

  @media screen and (min-width: 1440px) {
    margin-top: 90px;
  }
`;

export const WelcomeText = styled.p`
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  color: #246e8c;

  @media screen and (min-width: 768px) {
    font-size: 38px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 48px;
  }
`;

export const AuthText = styled.p`
  font-family: Nunito;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  max-width: 100%;
  text-align: center;
  margin-top: 16px;
  color: #0b1c24;

  @media screen and (min-width: 768px) {
    margin-top: 8px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 16px;
    font-size: 22px;
  }
`;
