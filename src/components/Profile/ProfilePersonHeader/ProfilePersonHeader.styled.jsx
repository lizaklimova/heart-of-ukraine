import styled from "styled-components";

export const AvatarNameWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 46px;

  @media screen and (min-width: 768px) {
    justify-content: left;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 72px;
    gap: 20px;
  }
`;

export const PersonInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 209px;

  @media screen and (min-width: 768px) {
    width: 378px;
  }

  @media screen and (min-width: 1440px) {
    width: 276px;
    gap: 20px;
  }
`;

export const PersonName = styled.p`
  font-family: Nunito;
  font-weight: 500;
  font-size: 17px;
  line-height: 1.5;
  color: #0b1c24;
  min-height: 26px;

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    min-height: 36px;
  }
`;

export const PersonOrg = styled.p`
  font-family: Nunito;
  font-weight: 300;
  font-size: 14px;
  color: #0b1c24;

  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;
