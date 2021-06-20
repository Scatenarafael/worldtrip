import { Flex, Box, Text, Image } from "@chakra-ui/react";

export function Banner() {
  return (
    <Box
      backgroundImage="url('/home/Background-banner-img.svg')"
      backgroundPosition="fixed"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      w="100%"
      h={["175px", "200px", "250px", "335px"]}
    >
      <Flex>
        <Flex
          direction="column"
          justify=" center"
          align="flex-start"
          w="50%"
          pl={["2rem", "3rem", "4rem", "5rem"]}
        >
          <Text
            fontSize={["16", "24", "30", "36"]}
            fontWeight="medium"
            color="white.300"
          >
            5 Continentes,
          </Text>
          <Text
            fontSize={["18", "24", "30", "36"]}
            fontWeight="medium"
            color="white.300"
            mb="1rem"
          >
            infinitas possibilidades
          </Text>
          <Text
            fontSize={["8", "8", "14", "20"]}
            fontWeight="regular"
            color="gray.300"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
          </Text>
        </Flex>
        <Image
          w={["10rem", "15rem", "20rem", "30rem"]}
          src="/home/Airplane.svg"
          mt={["3rem","3rem","4rem","5rem"]}
          ml="auto"
          mr={["3rem", "5rem", "8rem", "10rem"]}
        />
      </Flex>
    </Box>
  );
}
