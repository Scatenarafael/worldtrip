import { Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Pop } from "../Pop";

export function Details({
  numberofcountries,
  numberoflanguages,
  numberofpopularcities,
}: {
  numberofcountries: number;
  numberoflanguages: number;
  numberofpopularcities: number;
}) {
  return (
    <HStack spacing={{ sm: "2", md: "4", lg: "6", xl: "8" }}>
      <Flex direction="column" justify="center" align="center">
        <Text
          fontSize={{ sm: "28", md: "36", lg: "44", xl: "48" }}
          fontWeight="semibold"
          color="yellow.800"
        >
          {numberofcountries}
        </Text>
        <Text
          fontSize={{ sm: "18", md: "20", lg: "22", xl: "24" }}
          fontWeight="semibold"
        >
          países
        </Text>
      </Flex>
      <Flex direction="column" justify="center" align="center">
        <Text
          fontSize={{ sm: "28", md: "36", lg: "44", xl: "48" }}
          fontWeight="semibold"
          color="yellow.800"
        >
          {numberoflanguages}
        </Text>
        <Text
          fontSize={{ sm: "18", md: "20", lg: "22", xl: "24" }}
          fontWeight="semibold"
        >
          línguas
        </Text>
      </Flex>
      <Flex direction="column" justify="center" align="center">
        <Text
          fontSize={{ sm: "28", md: "36", lg: "44", xl: "48" }}
          fontWeight="semibold"
          color="yellow.800"
        >
          {numberofpopularcities}
        </Text>
        <Flex align="center">
          <Text
            fontSize={{ sm: "18", md: "20", lg: "22", xl: "24" }}
            fontWeight="semibold"
          >
            cidades +100
          </Text>
          <Pop />
        </Flex>
      </Flex>
    </HStack>
  );
}
