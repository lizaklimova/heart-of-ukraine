import styled from "styled-components";

export const StatisticList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    justify-content: left;
    gap: 12px;
    margin-top: 16px;
  }

  @media screen and (min-width: 1440px) {
    gap: 16px;
  }
`;

export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  padding: 8px 16px;
  width: 175px;
  height: 85px;
  box-shadow: 0 4px 12px 0 rgba(112, 122, 167, 0.25);
  background: #f9f9fc;

  @media screen and (min-width: 1440px) {
    width: 207px;
    height: 87px;
  }
`;

export const StatisticCount = styled.h3`
  font-family: Nunito;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.5;
  color: #246e8c;
`;

export const StatisticName = styled.p`
  font-family: Nunito;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.5;
  color: #0b1c24;
`;
