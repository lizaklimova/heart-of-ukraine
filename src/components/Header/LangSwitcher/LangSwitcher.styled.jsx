import styled from "styled-components";

export const LanguageMenuButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 29px;
  border-radius: 8px;
  background-color: #fff;
  cursor: pointer;
  border: 1px solid #e1ecf1;
  transition: border-color var(--transition-dur-and-func);
  &:hover,
  &:focus {
    border-color: #cde3fa;
  }
  &:active {
    border-color: #9cccfb;
  }
  &.header {
    @media (max-width: 1439px) {
      display: none;
    }
  }
`;

export const LanguageSvgWrap = styled.div`
  width: 20px;
  height: 15px;
`;

// export const LanguageSvg = styled.svg`
//   width: 20px;
//   height: 14px;
// `;

export const DropSvgWrap = styled.div`
  width: 24px;
  height: 24px;
`;

// export const ArrowSvg = styled.svg`
//   width: 24px;
//   height: 24px;
// `;

export const TriangleSvgWrap = styled.div`
  position: absolute;
  top: calc(6.5px + 29px);
  left: 4px;
  width: 24px;
  height: 12px;
  background-color: transparent;
`;

export const TriangleSvg = styled.svg`
  width: 24px;
  height: 12px;
`;

export const LanguageDropDown = styled.div`
  position: absolute;
  top: calc(18.5px + 29px);
  left: -12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-radius: 8px;
  background-color: #ffffff;
  padding: 6px 8px;
`;

export const LanguageButtonWrap = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 112px;
  height: 24px;
  border-radius: 8px;
  padding-left: 12px;
  background-color: #fff;
  transition: background-color var(--transition-dur-and-func);
  &:hover,
  &:focus {
    background-color: #e1ecf1;
  }
  &:active {
    background-color: #cde3fa;
  }
  &.chosen {
    background-color: #246e8c;
  }
`;

export const LanguageName = styled.p`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 12px;
  line-height: 1;
  color: #000;
  &.chosen {
    color: #fff;
  }
`;
