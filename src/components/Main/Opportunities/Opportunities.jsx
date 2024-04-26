import { useTranslation } from "react-i18next";
import { opportunitiesDataEn, opportunitiesDataUa } from "data";
import Opportunity from "./Opportunity";
import { MainContainer } from "layouts/MainContainer.styled";
import { Title } from "../CommonStyles.styled";
import {
  OpportunitiesList,
  OpportunitiesSection,
  OpportunityItem,
} from "./Opportunities.styled";

const Opportunities = () => {
  const { t, i18n } = useTranslation();
  const data =
    i18n.language === "uk" ? opportunitiesDataUa : opportunitiesDataEn;

  return (
    <OpportunitiesSection>
      <MainContainer>
        <Title>{t("opportunities.title")}</Title>
        <OpportunitiesList>
          {data.map((card) => (
            <OpportunityItem key={card.id}>
              <Opportunity card={card} />
            </OpportunityItem>
          ))}
        </OpportunitiesList>
      </MainContainer>
    </OpportunitiesSection>
  );
};

export default Opportunities;
