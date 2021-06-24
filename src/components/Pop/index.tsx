import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Text,
  Portal,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import React from "react";

export function Pop() {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <InfoOutlineIcon cursor="pointer" />
        </PopoverTrigger>
        <PopoverContent
          borderRadius="20px"
          w={{ sm: "150px", md: "200px", lg: "300px", xl: "300px" }}
        >
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody
            bgPos="left"
            borderRadius="20px"
            bg="yellow.400"
            p={{ sm: "20px", md: "20px", lg: "20px", xl: "30px" }}
          >
            <Text
              fontSize={{ sm: "10px", md: "10px", lg: "14px", xl: "14px" }}
              fontWeight="medium"
              textAlign="justify"
            >
              Número de cidades, pertencentes ao continente, que estão entre as
              100 mais populares do mundo
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
}
