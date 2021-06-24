import { Flex, Box, Text, Image } from "@chakra-ui/react";

export function Banner() {
  return (
    <Box
      backgroundImage="url('/home/Background-banner-img.svg')"
      backgroundPosition="fixed"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      w="100%"
      h={{ sm: "175px", md: "200px", lg: "250px", xl: "335px" }}
    >
      <Flex>
        <Flex
          direction="column"
          justify=" center"
          align="flex-start"
          w="50%"
          pl={{ sm: "2rem", md: "3rem", lg: "4rem", xl: "5rem" }}
        >
          <Text
            fontSize={{ sm: "16", md: "24", lg: "30", xl: "36" }}
            fontWeight="medium"
            color="white.300"
          >
            5 Continentes,
          </Text>
          <Text
            fontSize={{ sm: "18", md: "24", lg: "30", xl: "36" }}
            fontWeight="medium"
            color="white.300"
            mb="1rem"
          >
            infinitas possibilidades
          </Text>
          <Text
            fontSize={{ sm: "8", md: "8", lg: "14", xl: "20" }}
            fontWeight="regular"
            color="gray.300"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
          </Text>
        </Flex>
        <Image
          w={{ sm: "10rem", md: "15rem", lg: "20rem", xl: "30rem" }}
          src="/home/Airplane.svg"
          mt={{ sm: "3rem", md: "3rem", lg: "4rem", xl: "5rem" }}
          ml="auto"
          mr={{ sm: "3rem", md: "5rem", lg: "8rem", xl: "10rem" }}
        />
      </Flex>
    </Box>
  );
}
