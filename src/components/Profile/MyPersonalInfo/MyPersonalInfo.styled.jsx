import styled from "styled-components";

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PersonalInfoText = styled.p`
  font-family: Nunito;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  color: #053041;
  text-align: center;
  margin-top: 12px;
  margin-bottom: 20px;

  &.change {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    font-size: 22px;
    margin-bottom: 40px;

    &.change {
    margin-bottom: 0;
  }
  }
`;
