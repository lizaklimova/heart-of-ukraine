import styled, { keyframes, css } from "styled-components";
import { accentBtn } from "../../FiltersForm/FiltersForm.styled";

const commonWrapperStyles = css`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: 1440px) {
    gap: 60px;
  }
`;

const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  20% { transform: translateX(-5px); }
  40% { transform: translateX(5px); }
  60% { transform: translateX(-5px); }
  80% { transform: translateX(5px); }
  100% { transform: translateX(0); }
`;

export const CreateForm = styled.form`
  ${commonWrapperStyles}
`;

export const PositionWrap = styled.div`
  ${commonWrapperStyles}

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 126px;
  }

  @media screen and (min-width: 1920px) {
    padding-bottom: 50px;
  }
`;

export const MobTabPositioningWrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const TextAreasWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: 1440px) {
    gap: 60px;
    width: 50%;
  }
`;

export const AttachmentBtnWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 64px;

  .upload-error {
    position: absolute;
    top: -20px;
    right: 0;
    font-family: Nunito;
    font-size: 12px;
    color: #fe4747;
    margin-left: auto;
  }

  @media screen and (min-width: 1440px) {
    justify-content: space-between;
    width: 50%;
  }
`;

export const DeskPositioningWrap = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const TextAreaLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: Nunito;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
  color: #0b1c24;
`;

export const TextArea = styled.textarea`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #787d83;
  background: #fefefe;
  color: #0b1c24;
  resize: none;
  width: 100%;
  height: 116px;

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    margin: 5px 0;
  }

  &.invalid {
    border-color: #fe4747;
  }

  &#name {
    height: 54px;
  }

  &::placeholder {
    font-weight: 400;
    color: #a0a9b4;
  }
`;

export const RestrictionMsg = styled.p`
  font-family: Nunito;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  color: #808080;

  &.invalid {
    color: #fe4747;
    animation: ${shakeAnimation} 0.5s ease-in-out;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const ErrorMsg = styled.p`
  font-family: Nunito;
  font-size: 14px;
  color: #fe4747;

  &#checkboxes {
    margin-top: 8px;
  }
`;

export const AttachmentBlock = styled.div`
  min-height: 224px;
  border-radius: 8px;
  border: 3px dashed #c2ced8;
  padding: 16px 32px;

  &.invalid {
    border-color: #fe4747;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
    cursor: pointer;

    &:hover p,
    &:focus p {
      background: conic-gradient(
        from -3deg at 100% -13%,
        #f67307 0deg,
        #f67307 360deg
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &:active p {
      background: conic-gradient(
        from -3deg at 100% -13%,
        #b35e0f 0deg,
        #b35e0f 360deg
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    input {
      display: none;
    }
  }

  p {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
    background: conic-gradient(
      from -3deg at 100% -13%,
      #ffa502 0deg,
      #c85120 360deg
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const PostBtn = styled.button`
  ${accentBtn}
  width: 100%;
  max-width: 321px !important;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 343px !important;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const AttachmentList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc((100% - 80px) / 2);

    @media screen and (min-width: 450px) {
      width: calc((100% - 80px) / 4);
    }

    @media screen and (min-width: 768px) {
      width: unset;
    }

    div {
      position: relative;
    }

    button {
      position: absolute;
      top: -16px;
      right: -23px;
      background-color: transparent;

      svg {
        fill: transparent;
        stroke: #548ba0;
      }
    }
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 4px;
    object-fit: cover;
  }
`;
