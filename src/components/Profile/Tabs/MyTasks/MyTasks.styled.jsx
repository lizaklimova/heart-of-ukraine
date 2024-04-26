import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const DesktopWrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const MobTabWrap = styled.div`
  @media screen and (max-width: 1439px) {
    display: none;
  }
`;

export const SubPagesSection = styled.section`
  padding: 54px 0 100px 0;

  @media screen and (min-width: 1440px) {
    padding-top: 56px;
    padding-bottom: 30px;
  }
`;

export const ProfileScrollContainer = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ProfileTasksNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    gap: 125px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
    gap: 110px;
    margin-bottom: 52px;
  }
`;

export const ProfileTasksNavLink = styled(NavLink)`
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

export const TasksList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 687px;
  }

  @media screen and (min-width: 1440px) {
    gap: 32px;
    max-width: 654px;
  }
`;

export const NewTasksWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  padding: 0 20px;
  background: rgba(5, 48, 65, 0.9);

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 53px;
    height: 53px;
    background-color: #14ae5c;
    color: #fff;
    text-align: center;
    font-family: Nunito;
    font-size: 35.333px;
    font-weight: 600;
    line-height: 1.5;
    border-radius: 50%;
    margin-bottom: 19px;
  }

  p {
    text-align: center;
    font-family: Nunito;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    color: #f9f9fc;
    margin-bottom: 40px;
  }

  button {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
    padding: 12px 24px;
    color: #fff;
    width: 100%;
    max-width: 321px;
  }
`;
