import {
  Flex,
  HStack,
  Text,
} from "@chakra-ui/react";
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
    <HStack spacing={["2", "4", "6", "8"]}>
      <Flex direction="column" justify="center" align="center">
        <Text
          fontSize={["20", "32", "40", "48"]}
          fontWeight="semibold"
          color="yellow.800"
        >
          {numberofcountries}
        </Text>
        <Text fontSize={["18", "20", "22", "24"]} fontWeight="semibold">
          países
        </Text>
      </Flex>
      <Flex direction="column" justify="center" align="center">
        <Text
          fontSize={["20", "32", "40", "48"]}
          fontWeight="semibold"
          color="yellow.800"
        >
          {numberoflanguages}
        </Text>
        <Text fontSize={["18", "20", "22", "24"]} fontWeight="semibold">
          línguas
        </Text>
      </Flex>
      <Flex direction="column" justify="center" align="center">
        <Text
          fontSize={["20", "32", "40", "48"]}
          fontWeight="semibold"
          color="yellow.800"
        >
          {numberofpopularcities}
        </Text>
        <Text fontSize={["18", "20", "22", "24"]} fontWeight="semibold">
          cidades +100 <Pop />
        </Text>
      </Flex>
    </HStack>
  );
}
