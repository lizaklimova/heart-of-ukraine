import styled from "styled-components";

export const NotificationsSection = styled.section`
  padding: 54px 0 90px 0;
  margin: 0 auto;

  @media screen and (min-width: 1440px) {
    padding: 10px 0 30px 0;
  }
`;

export const NotificationsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;
