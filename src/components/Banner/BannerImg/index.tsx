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
      justify={{
        sm: "center",
        md: "center",
        lg: "flex-start",
        xl: "flex-start",
      }}
      align={{ sm: "center", md: "center", lg: "flex-end", xl: "flex-end" }}
    >
      <Text
        ml={{ sm: "0", md: "0", lg: "140px", xl: "140px" }}
        mb={{ sm: "0", md: "0", lg: "59px", xl: "59px" }}
        fontSize={{ sm: "28", md: "28", lg: "38", xl: "48" }}
        fontWeight="semibold"
        color="white.300"
      >
        {name}
      </Text>
    </Flex>
  );
}
