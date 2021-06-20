import { Stack, Flex, Image, Text } from "@chakra-ui/react";

export function TravelTypes() {
  return (
    <Stack
      direction="row"
      spacing={["1rem", "2.5rem", "3rem", "3.2rem"]}
      pb={["2rem", "3rem", "4rem", "5rem"]}
      pt={["2rem", "3rem", "4rem", "5rem"]}
    >
      <Flex
        direction="column"
        justify="flex-end"
        align="center"
        h={["3rem", "5rem", "7rem", "9.06rem"]}
        w={["3rem", "4rem", "6rem", "9.875rem"]}
      >
        <Image
          src="/home/icons/cocktail.svg"
          w={["2rem", "3rem", "4rem", "5rem"]}
        />
        <Text
          fontFamily="Poppins"
          fontSize={["7", "12", "16", "24"]}
          textAlign="center"
          fontWeight="semibold"
        >
          vida noturna
        </Text>
      </Flex>
      <Flex
        direction="column"
        justify="flex-end"
        align="center"
        h={["3rem", "5rem", "7rem", "9.06rem"]}
        w={["3rem", "4rem", "6rem", "9.875rem"]}
      >
        <Image
          src="/home/icons/surf.svg"
          w={["2rem", "3rem", "4rem", "5rem"]}
        />
        <Text
          fontFamily="Poppins"
          fontSize={["7", "12", "16", "24"]}
          textAlign="center"
          fontWeight="semibold"
        >
          praia
        </Text>
      </Flex>
      <Flex
        direction="column"
        justify="flex-end"
        align="center"
        h={["3rem", "5rem", "7rem", "9.06rem"]}
        w={["3rem", "4rem", "6rem", "9.875rem"]}
      >
        <Image
          src="/home/icons/building.svg"
          w={["2rem", "3rem", "4rem", "5rem"]}
        />
        <Text
          fontFamily="Poppins"
          fontSize={["7", "12", "16", "24"]}
          textAlign="center"
          fontWeight="semibold"
        >
          moderno
        </Text>
      </Flex>
      <Flex
        direction="column"
        justify="flex-end"
        align="center"
        h={["3rem", "5rem", "7rem", "9.06rem"]}
        w={["3rem", "4rem", "6rem", "9.875rem"]}
      >
        <Image
          src="/home/icons/museum.svg"
          w={["2rem", "3rem", "4rem", "5rem"]}
        />
        <Text
          fontFamily="Poppins"
          fontSize={["7", "12", "16", "24"]}
          textAlign="center"
          fontWeight="semibold"
        >
          clássico
        </Text>
      </Flex>
      <Flex
        direction="column"
        justify="flex-end"
        align="center"
        h={["3rem", "5rem", "7rem", "9.06rem"]}
        w={["3rem", "4rem", "6rem", "9.875rem"]}
      >
        <Image
          src="/home/icons/earth.svg"
          w={["2rem", "3rem", "4rem", "5rem"]}
        />
        <Text
          fontFamily="Poppins"
          fontSize={["7", "12", "16", "24"]}
          textAlign="center"
          fontWeight="semibold"
        >
          e mais...
        </Text>
      </Flex>
    </Stack>
  );
}
