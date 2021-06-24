import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
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
        templateRows={{
          sm: "repeat(4, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        templateColumns={{
          sm: "1fr",
          md: "1fr",
          lg: "repeat(2, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap={{ sm: 2, md: 2, lg: 2, xl: 8 }}
      >
        <GridItem
          h={{ sm: "150px", md: "300px", lg: "400px", xl: "500px" }}
          rowSpan={1}
          colSpan={2}
        >
          <BannerImg url={continent.urlImageBanner} name={continent.name} />
        </GridItem>
        <GridItem
          h={{ sm: "200px", md: "200px", lg: "200", xl: "330px" }}
          rowSpan={1}
          colSpan={{ sm: 2, md: 2, lg: 2, xl: 1 }}
        >
          <Flex
            w="100%"
            h="100%"
            pr={{ sm: "10px", md: "10px", lg: "10px", xl: "100px" }}
            ml={{ sm: "10px", md: "10px", lg: "10px", xl: "50px" }}
            mr={{ sm: "10px", md: "10px", lg: "0px", xl: "0px" }}
            align="center"
          >
            <Text
              fontSize={{ sm: "14", md: "16", lg: "16", xl: "24" }}
              w="100%"
              textAlign="justify"
              lineHeight="shorter"
            >
              {continent.description}
            </Text>
          </Flex>
        </GridItem>
        <GridItem
          h={{ sm: "80px", md: "80px", lg: "80px", xl: "330px" }}
          rowSpan={1}
          colSpan={{ sm: 2, md: 2, lg: 2, xl: 1 }}
        >
          <Flex
            h="100%"
            justify={{
              sm: "center",
              md: "center",
              lg: "center",
              xl: "flex-start",
            }}
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
          h={{ sm: "auto", md: "auto", lg: "700px", xl: "700px" }}
          rowSpan={1}
          colSpan={2}
        >
          <Flex
            m={{ sm: "10px", md: "20px", lg: "40px", xl: "50px" }}
            pb="50px"
            direction="column"
            align={{
              sm: "center",
              md: "center",
              lg: "flex-start",
              xl: "flex-start",
            }}
          >
            <Text
              fontSize="36"
              fontWeight="medium"
              mt={{ sm: "20px", md: "30px", lg: "40px", xl: "50px" }}
              mb={{ sm: "20px", md: "30px", lg: "40px", xl: "50px" }}
            >
              Cidades +100
            </Text>
            <Grid
              w="100%"
              templateColumns={{
                sm: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
                xl: "repeat(4, 1fr)",
              }}
              templateRows="auto"
              gap={{ sm: 1, md: 2, lg: 2, xl: 6 }}
            >
              {continent.cities.map((city) => {
                return (
                  <GridItem key={city.cityName} align="center">
                    <Card
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
