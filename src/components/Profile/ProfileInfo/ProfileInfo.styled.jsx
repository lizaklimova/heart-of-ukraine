import { Link } from "react-router-dom";
import styled from "styled-components";

export const InfoCont = styled.div`
  margin-top: 46px;
  margin-bottom: 100px;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-top: 48px;
    margin-bottom: 90px;
    width: 545px;
  }

  @media screen and (min-width: 1440px) {
    margin: 0 55px 168px auto;
    width: 718px;
  }

  @media screen and (min-width: 1920px) {
    margin-right: 145px;
    width: 848px;
  }
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media screen and (min-width: 1440px) {
    gap: 40px;
  }
`;

export const InfoItem = styled.li`
  width: 100%;
`;

export const ItemCont = styled.div`
  display: flex;
`;

export const InfoName = styled.p`
  font-family: Nunito;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.5;
  color: #0b1c24;
  min-width: 90px;
  margin-right: 40px;

  @media screen and (min-width: 768px) {
    margin-right: 35px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    min-width: 100px;
    margin-right: 45px;
  }
`;

export const InfoValue = styled.p`
  font-family: Nunito;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.45;
  color: #0b1c24;
  width: 100%;
  border-bottom: 1px solid #d8dee4;

  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const InfoBtnsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-top: 56px;

  @media screen and (min-width: 1440px) {
    margin-top: 64px;
  }
`;

export const SubmitBtn = styled(Link)`
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
  
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(200, 81, 32, 1) 0%,
    rgba(255, 165, 2, 1) 100%
  );

  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 343px;
  }
`;

export const RemoveAccBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 0 auto;

  svg {
    fill: #fe4747;
  }

  @media screen and (min-width: 1440px) {
    gap: 12px;
  }
`;

export const RemoveBtnText = styled.p`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  color: #fe4747;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.22;
  }
`;
