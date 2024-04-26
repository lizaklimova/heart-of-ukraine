import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ProfileOptionsItem = styled.li`
  height: 24px;
`;

export const ProfileOptionsLink = styled(NavLink)`
  position: relative;
  display: block;
  cursor: pointer;

  &.active::after {
    content: "";
    display: block;
    position: absolute;
    top: 115%;
    width: 100%;
    height: 1px;
    border-bottom: 2px solid #ffa502;
  }
`;

export const NavigateCompSvg = styled.svg`
  width: 24px;
  height: 24px;
  fill: #053041;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const ItemContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SvgAndNameWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const NavigateText = styled.p`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  color: #053041;
`;

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
`;
