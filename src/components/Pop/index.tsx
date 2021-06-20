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
          <InfoOutlineIcon
            w={["14px", "14px", "20px", "20px"]}
            cursor="pointer"
          />
        </PopoverTrigger>
        <PopoverContent borderRadius="20px">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody
            borderRadius="20px"
            bg="yellow.400"
            p={["20px", "20px", "20px", "30px"]}
          >
            <Text
              fontSize={["10px", "10px", "14px", "14px"]}
              fontWeight="medium"
              textAlign="justify"
            >
              Número de cidades, pertencentes ao continente, que estão entre as 100 mais
              populares do mundo
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
}
