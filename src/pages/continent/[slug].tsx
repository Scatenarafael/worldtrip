import {
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { RichText } from "prismic-dom";
import React from "react";
import { BannerImg } from "../../components/Banner/BannerImg";
import { Card } from "../../components/Card";
import { Details } from "../../components/Details";

import { getPrismicClient } from "../../services/prismic";

type CitiesShape = {
  urlImageCityCard: string;
  cityName: string;
  countryName: string;
  countryCode: string;
};

type ContinentShape = {
  name: string;
  subdesciption: string;
  description: string;
  numberofcountries: number;
  numberoflanguages: number;
  numberofpopularcities: number;
  urlImageSlider: string;
  urlImageBanner: string;
  cities: CitiesShape[];
};

interface ContinentProps {
  slug: string;
  continent: ContinentShape;
}

export default function Continent({ slug, continent }: ContinentProps) {
  return (
    <>
      <Grid
        h="100vh"
        templateRows={[
          "repeat(4, 1fr)",
          "repeat(4, 1fr)",
          "repeat(4, 1fr)",
          "repeat(3, 1fr)",
        ]}
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
        ]}
        gap={[2, 2, 2, 8]}
      >
        <GridItem
          h={["150px", "300px", "400px", "500px"]}
          rowSpan={1}
          colSpan={2}
        >
          <BannerImg url={continent.urlImageBanner} name={continent.name} />
        </GridItem>
        <GridItem
          h={["200px", "200px", "200", "330px"]}
          rowSpan={1}
          colSpan={[2, 2, 2, 1]}
        >
          <Flex
            w="100%"
            h="100%"
            pr={["10px", "10px", "10px", "100px"]}
            ml={["10px", "10px", "10px", "50px"]}
            mr={["10px", "10px", "0px", "0px"]}
            align="center"
          >
            <Text
              fontSize={["14", "16", "16", "24"]}
              w="100%"
              textAlign="justify"
              lineHeight="shorter"
            >
              {continent.description}
            </Text>
          </Flex>
        </GridItem>
        <GridItem
          h={["80px", "80px", "80px", "330px"]}
          rowSpan={1}
          colSpan={[2, 2, 2, 1]}
        >
          <Flex
            h="100%"
            justify={["center", "center", "center", "flex-start"]}
            align="center"
          >
            <Details
              numberofcountries={continent.numberofcountries}
              numberoflanguages={continent.numberoflanguages}
              numberofpopularcities={continent.numberofpopularcities}
            />
          </Flex>
        </GridItem>
        <GridItem
          h={["auto", "auto", "700px", "700px"]}
          rowSpan={1}
          colSpan={2}
        >
          <Flex
            m={["10px", "20px", "40px", "50px"]}
            pb="50px"
            direction="column"
          >
            <Text fontSize="36" fontWeight="medium" mb="50px">
              Cidades +100
            </Text>
            <Grid
              w="100%"
              templateColumns={[
                "1fr",
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
                "repeat(4, 1fr)",
              ]}
              templateRows="auto"
              gap={[1, 2, 2, 6]}
            >
              {continent.cities.map((city) => {
                return (
                  <GridItem>
                    <Card
                      key={city.countryCode}
                      imagecitycard={city.urlImageCityCard}
                      name={city.cityName}
                      country={city.countryName}
                      countrycode={city.countryCode}
                    />
                  </GridItem>
                );
              })}
            </Grid>
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const { slug } = params;
  const prismic = getPrismicClient(req);

  const response = await prismic.getByUID("continente", String(slug), {});

  const continent: ContinentShape = {
    name: RichText.asText(response.data.name),
    subdesciption: RichText.asText(response.data.subdescription),
    description: RichText.asText(response.data.description),
    numberofcountries: response.data.numberofcountries,
    numberoflanguages: response.data.numberoflanguages,
    numberofpopularcities: response.data.numberofpopularcities,
    urlImageSlider: response.data.imageslider.url,
    urlImageBanner: response.data.imagebannercontinent.url,
    cities: response.data.cities.map((city) => {
      return {
        urlImageCityCard: city.imagecitycard.url,
        cityName: RichText.asText(city.cityname),
        countryName: RichText.asText(city.country),
        countryCode: RichText.asText(city.countrycode),
      };
    }),
  };

  return {
    props: { slug, continent },
  };
};
