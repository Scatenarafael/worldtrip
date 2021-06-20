import { Flex } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import React from "react";
import SwiperCore, { A11y, Navigation, Pagination } from "swiper";
import { Banner } from "../components/Banner";
import { Divider } from "../components/Divider";
import { Slider } from "../components/Slider";
import { TravelTypes } from "../components/TravelTypes";
import { getPrismicClient } from "../services/prismic";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";

SwiperCore.use([Navigation, Pagination, A11y]);

type continentsDataShape = {
  name: string;
  subdescription: string;
  urlImageSlider: string;
  slug: string;
};

export interface HomeProps {
  continentsData: continentsDataShape[];
}

export default function Home({ continentsData }: HomeProps) {
  return (
    <Flex w="100%" justify="center" direction="column" align="center">
      <Banner />
      <TravelTypes />
      <Divider />
      <Slider continentsData={continentsData} />
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "continente")],
    {
      fetch: [
        "continente.name",
        "continente.uid",
        "continente.subdescription",
        "continente.imageslider",
      ],
      pageSize: 100,
    }
  );

  const continentsData = response.results.map((continent) => {
    return {
      name: RichText.asText(continent.data.name),
      subdescription: RichText.asText(continent.data.subdescription),
      urlImageSlider: continent.data.imageslider.url,
      slug: continent.uid,
    };
  });

  return {
    props: { continentsData },
  };
};
