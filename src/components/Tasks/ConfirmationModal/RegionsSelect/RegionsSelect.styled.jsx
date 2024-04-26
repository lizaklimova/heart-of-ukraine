import styled from "styled-components";

export const SelectBlock = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 10;
  min-width: 253px;
  min-height: 250px;
  padding: 15px 12px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 3px 6px 0px rgba(122, 127, 170, 0.25);

  ul {
    max-height: 215px;
    overflow-y: auto;

    &::-webkit-scrollbar-track {
      visibility: hidden !important;
    }

    li {
      cursor: pointer;
      margin-bottom: 23px;

      &:hover button,
      &:focus button {
        background: conic-gradient(
          from -3deg at 100% -13%,
          #ffa502 0deg,
          #c85120 360deg
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    li button {
      width: 100%;
      display: flex;
      align-items: center;
      font-family: Montserrat;
      font-size: 16px;
      text-transform: capitalize;
      font-weight: 600;
      line-height: normal;
      color: #053041;
    }

    :last-child {
      margin-bottom: 0;
    }
  }
`;
