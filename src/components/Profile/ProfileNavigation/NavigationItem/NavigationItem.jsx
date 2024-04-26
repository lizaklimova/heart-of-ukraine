import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import sprite from "assets/icons/sprite.svg";
import {
  IconWrap,
  ItemContentWrap,
  NavigateCompSvg,
  NavigateText,
  ProfileOptionsItem,
  ProfileOptionsLink,
  SvgAndNameWrap,
} from "./NavigationItem.styled";

const NavigationItem = ({ icon, text, to, state }) => {
  const { t } = useTranslation();

  return (
    <ProfileOptionsItem>
      <ProfileOptionsLink to={`/profile${to}`} state={state}>
        <ItemContentWrap>
          <SvgAndNameWrap>
            <IconWrap>{icon()}</IconWrap>
            <NavigateText>{t(text)}</NavigateText>
          </SvgAndNameWrap>
          <IconWrap>
            <NavigateCompSvg>
              <use href={`${sprite}#icon-right-arrow`} />
            </NavigateCompSvg>
          </IconWrap>
        </ItemContentWrap>
      </ProfileOptionsLink>
    </ProfileOptionsItem>
  );
};

export default NavigationItem;
