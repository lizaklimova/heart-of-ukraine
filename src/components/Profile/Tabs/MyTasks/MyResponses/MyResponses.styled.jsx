import styled from "styled-components";

export const ScrollWrap = styled.div`

  &.change {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    max-height: 800px;
    ${({ $variant }) => $variant === "notifications" && "max-height: 700px;"}
    overflow-y: auto;
    padding-bottom: 10px;
    margin: 0 auto;
  }
`;
