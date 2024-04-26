import styled from "styled-components";

export const NavCont = styled.div`
  margin-top: 64px;
  margin-bottom: 100px;
  width: 100%;
  height: 340px;

  @media screen and (min-width: 768px) {
    margin: 68px auto 249px;
    width: 626px;
  }

  @media screen and (min-width: 1440px) {
    height: unset;
    min-height: 110%;
    width: 455px;
    margin: 0;
    border-radius: 64px 64px 0 0;
    padding: 24px 24px 200px 50px;
    box-shadow: 4px 0 12px 0 rgba(112, 122, 167, 0.25);
    background: #f9f9fc;
  }
`;

export const NavigationWrap = styled.div`
  position: sticky;
  top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 340px;

  @media screen and (min-width: 1440px) {
    height: 400px;
  }
`;

export const ProfileOptionsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
