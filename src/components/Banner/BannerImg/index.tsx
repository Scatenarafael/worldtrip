import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export function BannerImg({ url, name }: { url: string; name: string }) {
  return (
    <Flex
      w="100%"
      h="100%"
      backgroundImage={`url(${url})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      justify={["center", "center", "flex-start", "flex-start"]}
      align={["center", "center", "flex-end", "flex-end"]}
    >
      <Text
        ml={["0", "0", "140px", "140px"]}
        mb={["0", "0", "59px", "59px"]}
        fontSize={["28", "28", "38", "48"]}
        fontWeight="semibold"
        color="white.300"
      >
        {name}
      </Text>
    </Flex>
  );
}
