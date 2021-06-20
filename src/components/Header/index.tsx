import { Flex, Grid, Icon, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";

export function Header() {
  const { asPath } = useRouter();
  const isNotAtHome = asPath !== "/";

  return (
    <Flex
      bg="white"
      w="100%"
      as="header"
      mx="auto"
      px="1rem"
      h={["50px", "100px"]}
      align="center"
      justify="center"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
        alignSelf="start"
      >
        {isNotAtHome && (
          <Link href="/">
            <a>
              <Icon
                as={FiChevronLeft}
                fontSize={[20, 20, 30, 40]}
                justifySelf="start"
              />
            </a>
          </Link>
        )}
        <Image
          w={["5rem", "8rem", "10rem", "12rem"]}
          m="23"
          src="/home/Logo.svg"
          alt="Um avição voando sobre o nome da marca world trip"
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  );
}
