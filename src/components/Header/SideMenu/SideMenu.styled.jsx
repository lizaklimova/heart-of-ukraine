import { Link } from "react-router-dom";
import styled from "styled-components";
import { gradientTextHover } from "components/Tasks/Tasks.styled";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.53);
  z-index: 5;
`;

export const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  right: -100%;
  display: flex;
  flex-direction: column;
  visibility: hidden;
  height: 100vh;
  width: 100%;
  padding: 24px 16px 24px 40px;
  background-color: #f9f9fc;
  z-index: 6;
  transition-duration: 0.25s;
  overflow-y: auto;
  overflow-x: hidden;
  &.shown {
    visibility: visible;
    right: 0;
    overflow: hidden;
  }
  &::before {
    content: "";
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #a7552b;
  }

  @media screen and (min-width: 768px) {
    width: 360px;
    padding: 12px 40px;
    &::before {
      top: 60px;
    }
  }

  @media screen and (min-width: 1440px) {
    padding: 12px 50px;
    /* padding: 12px 58px 12px 50px; */
    top: 37px;
    width: 393px;
    /* width: 401px; */
    height: 627px;
  }

  @media screen and (min-width: 1920px) {
    padding: 12px 40px;
    &.shown {
      right: 60px;
    }
  }
`;

export const BurgerHeaderCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const AvatarNameWrap = styled(Link)`
  display: flex;
  gap: 12px;
  padding: 12px 0;
  margin-bottom: 16px;
  cursor: pointer;
`;

export const PersonInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const PersonName = styled.p`
  font-family: Nunito;
  font-weight: 500;
  font-size: 17px;
  line-height: 1.5;
  color: #000;
  height: 21px;
`;

export const PersonEmail = styled.p`
  font-family: Nunito;
  font-weight: 400;
  font-size: 14px;
  color: #246e8c;
  height: 14px;
`;

export const AuthButtonsWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

export const RegisterButton = styled.button`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 18px;
  font-style: normal;
  padding: 0;
  color: transparent;
  background: linear-gradient(
    90deg,
    rgba(200, 81, 32, 1) 0%,
    rgba(255, 165, 2, 1) 100%
  );
  background-clip: text;
  ${gradientTextHover}
`;

export const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const NavMenuLink = styled(Link)`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
  color: #246e8c;
  align-self: flex-start;
  transition: color var(--transition-dur-and-func);

  &:hover,
  &:focus {
    color: #005171;
  }

  &:active {
    color: #204250;
  }
`;

export const ProfileOptionsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ProfileOptionsItem = styled.li`
  height: 16px;
`;

export const ProfileOptionsLink = styled(Link)`
  font-family: Nunito;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  color: #053041;
  transition: color var(--transition-dur-and-func);

  &:hover,
  &:focus {
    color: #a7552b;
  }

  &:active {
    color: #8c360a;
  }
`;

export const ProfileOptionsALink = styled.a`
  font-family: Nunito;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  color: #053041;
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