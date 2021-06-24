import { Flex, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay, A11y } from "swiper";
import Link from "next/link";
import React from "react";
import { HomeProps } from "../../pages";

SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);

export function Slider({ continentsData }: HomeProps) {
  return (
    <Flex
      w="100%"
      h={{ sm: "250px", md: "300px", lg: "350px", xl: "450px" }}
      maxWidth="1240px"
      mx="auto"
      mb="2rem"
    >
      <Swiper
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        style={{
          width: "100%",
        }}
      >
        {continentsData.map((data) => {
          return (
            <SwiperSlide key={data.slug}>
              <Flex
                direction="column"
                w="100%"
                h="100%"
                align="center"
                justify="center"
                bgImage={`url(${data.urlImageSlider})`}
                bgPosition="center"
                bgSize="cover"
                bgRepeat="no-repeat"
                textAlign="center"
                color="white"
                fontFamily="Poppins"
                fontWeight="bold"
              >
                <Link href={`/continent/${data.slug}`}>
                  <a key={data.slug}>
                    <Text fontSize={{ sm: "26", md: "32", lg: "40", xl: "48" }}>
                      {data.name}
                    </Text>
                    <Text fontSize={{ sm: "7", md: "12", lg: "18", xl: "24" }}>
                      {data.subdescription}
                    </Text>
                  </a>
                </Link>
              </Flex>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Flex>
  );
}
