import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { Flag } from "../Flag";

export function Card({
  key,
  imagecitycard,
  name,
  country,
  countrycode,
}: {
  key: React.Key;
  imagecitycard: string;
  name: string;
  country: string;
  countrycode: string;
}) {
  return (
    <Grid
      key={key}
      h="279px"
      w="256px"
      minW="256px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={2}
      bg="white"
      borderTopRadius="5px"
      borderWidth="1px"
      borderColor="yellow.800"
    >
      <GridItem
        w="100%"
        h="173px"
        rowSpan={1}
        colSpan={2}
        backgroundImage={`url(${imagecitycard})`}
        backgroundPosition="center"
        backgroundSize="cover"
        borderTopRadius="5px"
      />
      <GridItem rowSpan={1} colSpan={1}>
        <Flex
          h="100%"
          pl="15px"
          direction="column"
          justify="space-around"
          align="flex-start"
        >
          <Text fontFamily="Barlow" fontWeight="semibold" fontSize="20">
            {name}
          </Text>
          <Text fontFamily="Barlow" fontWeight="regular" fontSize="14">
            {country}
          </Text>
        </Flex>
      </GridItem>
      <GridItem>
        <Flex h="100%" pr="10px" justify="flex-end" align="center">
          <Flag countryCode={countrycode} />
        </Flex>
      </GridItem>
    </Grid>
  );
}
