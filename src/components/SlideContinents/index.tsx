import { Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";

import { ContentSlide } from "./ContentSlide";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Pagination, Navigation]);

export function SlideContinents() {
  return (

   <Flex
      w="100%"
      maxWidth={1240}
      height={[260,
      450]}
      mx="auto"
      mb="12"
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          "clickable": true
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <ContentSlide
            imageBackground="images/banner-europa.png"
            herf="/europa"
            continentTitle="Europa"
            continentDescription="O continente mais antigo." 
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlide
            imageBackground="images/banner-europa.png"
            herf="/europa"
            continentTitle="Europa"
            continentDescription="O continente mais antigo." 
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlide
            imageBackground="images/banner-europa.png"
            herf="/europa"
            continentTitle="Europa"
            continentDescription="O continente mais antigo." 
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlide
            imageBackground="images/banner-europa.png"
            herf="/europa"
            continentTitle="Europa"
            continentDescription="O continente mais antigo." 
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContentSlide
            imageBackground="images/banner-europa.png"
            herf="/europa"
            continentTitle="Europa"
            continentDescription="O continente mais antigo." 
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}