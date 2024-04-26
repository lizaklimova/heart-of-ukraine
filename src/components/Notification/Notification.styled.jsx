import { Link } from "react-router-dom";
import styled from "styled-components";
import { gradientTextHover } from "../Tasks/Tasks.styled";

export const NotificationItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin: 0 auto;
  min-height: 50px;
  width: 100%;
  max-width: 400px;

  @media screen and (min-width: 768px) {
    width: 500px;
    max-width: unset;
  }

  @media screen and (min-width: 1440px) {
    width: 659px;
  }

  @media screen and (min-width: 1920px) {
    width: 800px;
  }
`;

export const NotificationBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 100%;
  border-radius: 8px 0px 8px 8px;
  padding: 10px;
  background: rgba(193, 215, 203, 0.1);
  box-shadow: 0px -1px 4px 0px rgba(119, 139, 158, 0.2) inset,
    0px 1px 4px 0px rgba(119, 139, 158, 0.2) inset;
  backdrop-filter: blur(10px);

  ${({ $variant }) =>
    $variant === "all" && "max-width: 370px; padding-bottom: 14px;"}
  ${({ $variant }) =>
    $variant === "support" && "max-width: 450px;padding-top: 12px;"}


  &.info {
    background: rgba(193, 215, 203, 0.2);
    box-shadow: 0px -1px 4px 0px rgba(105, 149, 234, 0.3) inset,
      0px 1px 4px 0px rgba(105, 149, 234, 0.3) inset;
  }

  &.error {
    background: ${({ $variant }) =>
      `rgba(193, 215, 203, ${$variant === "auth" ? "0.5" : "0.1"})`};
    box-shadow: 0px -1px 4px 0px rgba(215, 49, 49, 0.15) inset,
      0px 1px 4px 0px rgba(215, 49, 49, 0.15) inset;
  }

  &.waiting {
    box-shadow: 0px -1px 4px 0px rgba(90, 119, 54, 0.3) inset,
      0px 1px 4px 0px rgba(90, 119, 54, 0.3) inset;
  }

  &.reminder {
    box-shadow: 0px -1px 4px 0px rgba(105, 149, 234, 0.3) inset,
      0px 1px 4px 0px rgba(105, 149, 234, 0.3) inset;
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  p {
    font-family: Nunito;
    font-size: 16px;
    color: #0b1c24;
    margin-top: 8px;
    /* text-overflow: ellipsis; */
    /* overflow: hidden;
     */
    word-wrap: break-word;
  }

  svg {
    stroke: #204250;

    &.info {
      stroke: #246e8c;
    }

    &.error {
      stroke: #fe4747;
      margin-top: -3px;
    }

    &.waiting {
      stroke: #5a7736;
    }

    &.reminder {
      stroke: #ed861e;
    }
  }

  h4 {
    color: #204250;

    &.info {
      color: #246e8c;
    }

    &.error {
      color: #fe4747;
    }

    &.waiting {
      color: #5a7736;
    }

    &.reminder {
      color: #ed861e;
    }
  }

  .close-notification-btn {
    position: absolute;
    top: 13px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    #close-notification {
      fill: #000;
      stroke: none;
      margin-top: 0;
      transition: fill 150ms linear;
    }

    &:hover #close-notification,
    &:focus #close-notification {
      &.info {
        fill: #246e8c;
      }

      &.error {
        fill: #fe4747;
      }

      &.waiting {
        fill: #5a7736;
      }
    }
  }
`;

export const TimeBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  margin-bottom: 8px;

  p,
  time {
    font-family: Nunito;
    font-size: 14px;
  }
`;

export const MoreDetailsLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  margin-top: 12px;
  padding-right: 5px;
  background: conic-gradient(
    from -3deg at 100% -13%,
    #ffa502 0deg,
    #c85120 360deg
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${gradientTextHover}

  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const AssistanceBtnsBlock = styled.div`
  display: flex;
  height: 40px;
  margin-top: 26px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    padding: 12px 24px;

    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }

  .assistance-provided {
    color: #fff;
    border-radius: 12px 0px 0px 12px;
    margin-right: -10px;
    height: 40px;
  }

  .assistance-not-provided {
    color: #707aa7;
    border-radius: 0px 12px 12px 0px;
    border: 2px solid #c2ced8;
    height: 40px;
    transition: border-color 150ms linear, background-color 150ms linear;

    @media screen and (min-width: 768px) {
      font-size: 18px;
    }

    &:hover,
    &:focus {
      border-color: #707aa7;
    }

    &:active {
      border-color: #c2ced8;
      background-color: #c2ced8;
    }
  }
`;
