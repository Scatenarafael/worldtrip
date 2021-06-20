import { Flex, Box, Text } from "@chakra-ui/react";

export function Divider() {
  return (
    <Flex direction="column" justify="flex-start" align="center">
      <Box
        w={["50px", "70px", "80px", "90px"]}
        borderTopWidth="3px"
        borderColor="gray.500"
      />
      <Text
        fontFamily="Poppins"
        fontSize={["18", "24", "30", "36"]}
        fontWeight="medium"
        color="gray.600"
        pt={["2rem", "2rem", "3rem", "4rem"]}
        pb={["0.4rem", "0.6rem", "0.8rem", "1rem"]}
      >
        Vamos nessa?
      </Text>
      <Text
        fontFamily="Poppins"
        fontSize={["18", "24", "30", "36"]}
        fontWeight="medium"
        color="gray.600"
        mb={["1rem", "1rem", "2rem", "3rem"]}
      >
        Então escolha seu continente
      </Text>
    </Flex>
  );
}
