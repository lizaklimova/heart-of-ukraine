import styled from "styled-components";

export const PaginationBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  color: #000;
  background-color: transparent;
  ${({ $variant }) => $variant === "tasks" && "margin-top: 48px;"}

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    ${({ $variant }) => $variant === "tasks" && "margin-top: 81px;"}
  }

  @media screen and (min-width: 1440px) {
    margin-top: 50px;
    ${({ $variant }) => $variant !== "tasks" && " justify-content: flex-end;"}
    ${({ $request }) => $request && " margin-top: 64px;"}
  }

  @media screen and (min-width: 1920px) {
    margin-top: 92px;
    ${({ $request }) => $request && " margin-top: 64px;"}
  }
`;

export const PaginationBtn = styled.button`
  background-color: transparent;
  padding: 0;
  transition: color 150ms linear;

  &:hover,
  &:focus {
    color: #a7552b;
  }

  &:active {
    color: #b35e0f;
  }

  &.active {
    border-radius: 4px;
    padding: 4px 8px;
    background: conic-gradient(
      from -3deg at 100% -13%,
      #ffa502 0deg,
      #c85120 360deg
    );
    color: #efeff5;

    &:hover,
    &:focus {
      background: conic-gradient(
        from -3deg at 100% -13%,
        #f67307 0deg,
        #f67307 360deg
      );
    }

    &:active {
      background: conic-gradient(
        from -3deg at 100% -13%,
        #b35e0f 0deg,
        #b35e0f 360deg
      );
    }
  }
`;

export const Dots = styled.span`
  opacity: 0.4;
  cursor: default;
`;

export const PrevPageBtn = styled.button`
  padding: 0;
  transform: translateY(2px);
  background-color: transparent;

  &:hover svg,
  &:focus svg {
    stroke: #a7552b;
  }

  &:active svg {
    stroke: #b35e0f;
  }

  svg {
    transform: rotate(180deg);
  }
`;

export const NextPageBtn = styled.button`
  padding: 0;
  transform: translateY(2px);
  background-color: transparent;
  transition: stroke 150ms linear;

  &:hover svg,
  &:focus svg {
    stroke: #a7552b;
  }

  &:active svg {
    stroke: #b35e0f;
  }
`;
