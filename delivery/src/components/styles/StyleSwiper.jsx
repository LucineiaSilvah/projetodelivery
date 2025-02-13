import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";

export const StyledSwiper = styled(Swiper)`
width: 100%;
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;



  }
`;