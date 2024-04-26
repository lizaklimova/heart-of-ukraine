import styled from "styled-components";

export const TimerNumber = styled.p`
  font-family: Nunito;
  font-weight: 600;
  font-size: 48px;
  line-height: 0.62;
  color: #0b1c24;
  margin-bottom: 64px;
  &.timer-low {
    color: #fe4747;
  }
`;

export const HelpText = styled.p`
  font-family: Nunito;
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  text-align: center;
  color: #000;
  margin-bottom: calc(24px - 15px);
`;
