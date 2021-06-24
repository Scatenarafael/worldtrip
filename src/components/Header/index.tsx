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
      w="100%"
      as="header"
      mx="auto"
      px="1rem"
      h={{ sm: "50px", md: "75px", lg: "100px", xl: "100px" }}
      align="center"
      justify="center"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
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
                fontSize={{ sm: 20, md: 20, lg: 30, xl: 40 }}
                justifySelf="start"
              />
            </a>
          </Link>
        )}
        <Image
          w={{ sm: "5rem", md: "8rem", lg: "10rem", xl: "12rem" }}
          m="23"
          src="/home/Logo.svg"
          alt="Um avião voando sobre o nome da marca world trip"
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  );
}
