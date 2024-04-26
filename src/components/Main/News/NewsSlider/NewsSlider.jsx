import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import {
  NewsCard,
  NewsDescr,
  NewsImg,
  NewsTimeDateBlock,
} from "../News.styled";

const NewsSlider = ({ news }) => {
  return (
    <Swiper
      slideToClickedSlide={true}
      spaceBetween={30}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
      }}
      loop={true}
      keyboard={true}
      updateOnWindowResize={true}
      modules={[Pagination, Autoplay, Keyboard]}
      className="mySwiper"
      breakpoints={{
        600: {
          slidesPerView: 1,
          pagination: {
            type: "bullets",
          },
        },
        1024: {
          slidesPerView: 2,
          pagination: {
            type: "fraction",
          },
        },
        1440: {
          slidesPerView: 3,
          pagination: {
            type: "fraction",
          },
        },
      }}
    >
      {news?.content?.map(({ id, image, text, time, date }) => (
        <SwiperSlide key={id}>
          <NewsCard>
            <NewsImg src={image} alt="news preview" />
            <NewsDescr>{text}</NewsDescr>
            <NewsTimeDateBlock className="date-block">
              <time>{time}</time>
              <p>{date}</p>
            </NewsTimeDateBlock>
          </NewsCard>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default NewsSlider;
