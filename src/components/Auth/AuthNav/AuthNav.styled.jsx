import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavBlock = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    gap: 125px;
  }

  @media screen and (min-width: 1440px) {
    gap: 110px;
  }
`;

export const AuthNavLink = styled(NavLink)`
  font-family: Montserrat;
  font-size: 24px;
  line-height: 1.5;
  color: #415158;

  &:not(&.active):hover,
  &:not(&.active):focus {
    background: conic-gradient(
      from -3deg at 100% -13%,
      #ffa502 0deg,
      #c85120 360deg
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }

  &.active {
    position: relative;
    font-size: 24px;
    font-weight: 600;
    color: #0b1c24;
    border-bottom: 2px solid #ffa502;

    @media screen and (min-width: 768px) {
      font-size: 26px;
    }

    @media screen and (min-width: 1440px) {
      font-size: 24px;
    }
  }
`;
