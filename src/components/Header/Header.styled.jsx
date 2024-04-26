import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrap = styled.header`
  padding: 24px 16px;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    padding: 12px 40px;
  }

  @media screen and (min-width: 1440px) {
    padding: 32px 50px;
  }

  @media screen and (min-width: 1920px) {
    padding: 32px 100px;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  transition: filter var(--transition-dur-and-func);

  &:hover,
  &:focus {
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.1));
  }
`;

export const LogoSvg = styled.svg`
  width: 42px;
  height: 42px;

  @media screen and (min-width: 1440px) {
    width: 76px;
    height: 74px;
  }
`;

export const LogoName = styled.p`
  font-family: Nunito;
  font-weight: 400;
  font-size: 18px;
  line-height: 1;
  color: #0b1c24;
  width: 72px;
  text-align: center;
  margin-left: 4px;

  @media screen and (min-width: 1440px) {
    font-size: 32px;
    width: 126px;
  }
`;

export const NavWrap = styled.nav`
  display: none;

  @media (min-width: 1440px) {
    display: flex;
    align-items: center;
    gap: 140px;
    padding: 4px 0px;
  }

  @media (min-width: 1920px) {
    gap: 200px;
  }
`;

export const NavigateLink = styled.a`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 28px;
  line-height: 1.5;
  color: #0b1c24;
  cursor: pointer;
  transition: color var(--transition-dur-and-func);

  &:hover,
  &:focus {
    color: #a7552b;
  }

  &:active {
    color: #8c360a;
  }
`;

export const UserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const AvatarHeader = styled.button`
  width: 43px;
  height: 43px;
  border-radius: 50%;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b3b3b3;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &.header {
    width: 32px;
    height: 32px;
    @media (max-width: 1439px) {
      display: none;
    }
  }
`;

// export const SvgLogoUserHeader = styled.svg`
//   width: 29px;
//   height: 27px;
//   fill: #e9e9e9;

//   &.header {
//     width: 22px;
//     height: 20px;
//   }
// `;

export const EnterLink = styled(Link)`
  @media (max-width: 1439px) {
    display: none;
  }
`;

export const HeaderButton = styled.button`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  font-style: normal;
  border-radius: 12px;
  padding: 8.5px 24px;
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(200, 81, 32, 1) 0%,
    rgba(255, 165, 2, 1) 100%
  );
`;

export const BurgerWrap = styled.div`
  position: relative;
  height: 40px;

  span {
    position: absolute;
    top: -5px;
    right: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    font-family: Nunito;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
    background-color: #ff4c4c;
    cursor: pointer;
  }
`;

export const BurgerBtn = styled.button`
  position: relative;
  width: 52px;
  height: 40px;
  padding: 0 6px 0 6px;
  background: transparent;
  border: none;
`;

// export const BurgerSvg = styled.svg`
//   width: 40px;
//   height: 40px;
//   fill: #053041;
// `;
