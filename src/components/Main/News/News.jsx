import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getNews } from "src/api/news/getNews";
import NewsSlider from "./NewsSlider";
import { MainContainer } from "src/layouts/MainContainer.styled";
import { Title } from "../CommonStyles.styled";
import { NewsSection } from "./News.styled";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await getNews();
      setNews(response);
    };
    fetchNews();
  }, []);

  const { t } = useTranslation();

  return (
    <NewsSection id="news">
      <MainContainer>
        <Title id="news">{t("news.title")}</Title>
        <NewsSlider news={news} />
      </MainContainer>
    </NewsSection>
  );
};

export default News;
