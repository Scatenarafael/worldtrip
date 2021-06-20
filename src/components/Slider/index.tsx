import { Flex, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay, A11y } from "swiper";
import Link from "next/link";
import React from "react";
import { HomeProps } from "../../pages";

SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);

export function Slider({ continentsData }: HomeProps) {
  return (
    <Flex w="100%" h={["250px", "450px"]} maxWidth="1240px" mx="auto" mb="2rem">
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
            <SwiperSlide>
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
                    <Text fontSize={["26", "32", "40", "48"]}>{data.name}</Text>
                    <Text fontSize={["7", "12", "18", "24"]}>
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
