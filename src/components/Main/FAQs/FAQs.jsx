import { useTranslation } from "react-i18next";
import FAQsItem from "../FAQsItem/FAQsItem";
import questionsUa from "src/data/questionsUa.json";
import questionsEn from "src/data/questionsEn.json";
import { MainContainer } from "src/layouts/MainContainer.styled";
import { FAQList, FAQSection, FAQWrap, FAQh2 } from "./FAQs.styled";
import { useEffect, useState } from "react";

const FAQs = () => {
  const { i18n } = useTranslation();

  const [faqList, setFaqList] = useState([]);

  useEffect(() => {
    const selectedQuestions =
      i18n.language === "en" ? questionsEn : questionsUa;
    setFaqList(selectedQuestions);
  }, [i18n.language]);

  return (
    <FAQSection>
      <MainContainer>
        <FAQWrap>
          <FAQh2>FAQ</FAQh2>
          <FAQList>
            {faqList.map((question) => (
              <FAQsItem question={question} key={question.id} />
            ))}
          </FAQList>
        </FAQWrap>
      </MainContainer>
    </FAQSection>
  );
};

export default FAQs;
