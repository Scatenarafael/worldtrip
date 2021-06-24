import { Flex, Box, Text } from "@chakra-ui/react";

export function Divider() {
  return (
    <Flex direction="column" justify="flex-start" align="center">
      <Box
        w={{ sm: "50px", md: "70px", lg: "80px", xl: "90px" }}
        borderTopWidth="3px"
        borderColor="gray.500"
      />
      <Text
        fontFamily="Poppins"
        fontSize={{ sm: "18", md: "24", lg: "30", xl: "36" }}
        fontWeight="medium"
        color="gray.600"
        pt={{ sm: "2rem", md: "2rem", lg: "3rem", xl: "4rem" }}
        pb={{ sm: "0.4rem", md: "0.6rem", lg: "0.8rem", xl: "1rem" }}
      >
        Vamos nessa?
      </Text>
      <Text
        fontFamily="Poppins"
        fontSize={{ sm: "18", md: "24", lg: "30", xl: "36" }}
        fontWeight="medium"
        color="gray.600"
        mb={{ sm: "1rem", md: "1rem", lg: "2rem", xl: "3rem" }}
      >
        Então escolha seu continente
      </Text>
    </Flex>
  );
}
