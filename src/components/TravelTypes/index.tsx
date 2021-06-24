import { Flex, Image, Text, Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { breakpoints } from "../../styles/theme";

export function TravelTypes() {
  const [isInWideScreen, setIsInWideScreen] = useState(true);

  useEffect(() => {
    setIsInWideScreen(window.innerWidth > Number(breakpoints.lg.split("p")[0]));
    window.addEventListener("resize", () => {
      setIsInWideScreen(
        window.innerWidth > Number(breakpoints.lg.split("p")[0])
      );
    });
  }, []);
  return (
    <Grid
      w="100%"
      justify="center"
      align="center"
      templateColumns={{
        sm: "repeat(2,1fr)",
        md: "repeat(2,1fr)",
        lg: "repeat(5,1fr)",
        xl: "repeat(5,1fr)",
      }}
      templateRows={{
        sm: "repeat(3,1fr)",
        md: "repeat(3,1fr)",
        lg: "1fr",
        xl: "1fr",
      }}
      pb={{ sm: "2rem", md: "3rem", lg: "4rem", xl: "5rem" }}
      pt={{ sm: "2rem", md: "3rem", lg: "4rem", xl: "5rem" }}
      gap={{ sm: "10px", md: "20px", lg: "20px", xl: "50px" }}
    >
      <GridItem colSpan={1} rowSpan={1}>
        <Flex
          w="100%"
          direction={{
            sm: "row",
            md: "row",
            lg: "column",
            xl: "column",
          }}
          justify="center"
          align="center"
          h={{ sm: "3rem", md: "5rem", lg: "7rem", xl: "9.06rem" }}
        >
          {isInWideScreen ? (
            <Image
              src="/home/icons/cocktail.svg"
              w={{ sm: "2rem", md: "3rem", lg: "4rem", xl: "5rem" }}
            />
          ) : (
            <Image src="/home/icons/elipse.svg" w="8px" />
          )}

          <Text
            ml={{ sm: "10px", md: "10px", lg: "0px", xl: "0px" }}
            fontFamily="Poppins"
            fontSize={{ sm: "18", md: "24", lg: "24", xl: "24" }}
            textAlign="center"
            fontWeight="semibold"
          >
            vida noturna
          </Text>
        </Flex>
      </GridItem>
      <GridItem colSpan={1} rowSpan={1}>
        <Flex
          w="100%"
          direction={{
            sm: "row",
            md: "row",
            lg: "column",
            xl: "column",
          }}
          justify="center"
          align="center"
          h={{ sm: "3rem", md: "5rem", lg: "7rem", xl: "9.06rem" }}
        >
          {isInWideScreen ? (
            <Image
              src="/home/icons/surf.svg"
              w={{ sm: "2rem", md: "3rem", lg: "4rem", xl: "5rem" }}
            />
          ) : (
            <Image src="/home/icons/elipse.svg" w="8px" />
          )}
          <Text
            ml={{ sm: "10px", md: "10px", lg: "0px", xl: "0px" }}
            fontFamily="Poppins"
            fontSize={{ sm: "18", md: "24", lg: "24", xl: "24" }}
            textAlign="center"
            fontWeight="semibold"
          >
            praia
          </Text>
        </Flex>
      </GridItem>
      <GridItem colSpan={1} rowSpan={1}>
        <Flex
          w="100%"
          direction={{
            sm: "row",
            md: "row",
            lg: "column",
            xl: "column",
          }}
          justify="center"
          align="center"
          h={{ sm: "3rem", md: "5rem", lg: "7rem", xl: "9.06rem" }}
        >
          {isInWideScreen ? (
            <Image
              src="/home/icons/building.svg"
              w={{ sm: "2rem", md: "3rem", lg: "4rem", xl: "5rem" }}
            />
          ) : (
            <Image src="/home/icons/elipse.svg" w="8px" />
          )}
          <Text
            ml={{ sm: "10px", md: "10px", lg: "0px", xl: "0px" }}
            fontFamily="Poppins"
            fontSize={{ sm: "18", md: "24", lg: "24", xl: "24" }}
            textAlign="center"
            fontWeight="semibold"
          >
            moderno
          </Text>
        </Flex>
      </GridItem>
      <GridItem colSpan={1} rowSpan={1}>
        <Flex
          w="100%"
          direction={{
            sm: "row",
            md: "row",
            lg: "column",
            xl: "column",
          }}
          justify="center"
          align="center"
          h={{ sm: "3rem", md: "5rem", lg: "7rem", xl: "9.06rem" }}
        >
          {isInWideScreen ? (
            <Image
              src="/home/icons/museum.svg"
              w={{ sm: "2rem", md: "3rem", lg: "4rem", xl: "5rem" }}
            />
          ) : (
            <Image src="/home/icons/elipse.svg" w="8px" />
          )}
          <Text
            ml={{ sm: "10px", md: "10px", lg: "0px", xl: "0px" }}
            fontFamily="Poppins"
            fontSize={{ sm: "18", md: "24", lg: "24", xl: "24" }}
            textAlign="center"
            fontWeight="semibold"
          >
            clássico
          </Text>
        </Flex>
      </GridItem>
      <GridItem colSpan={{ sm: 2, md: 2, lg: 1, xl: 1 }} rowSpan={1}>
        <Flex
          w="100%"
          direction={{
            sm: "row",
            md: "row",
            lg: "column",
            xl: "column",
          }}
          justify="center"
          align="center"
          h={{ sm: "3rem", md: "5rem", lg: "7rem", xl: "9.06rem" }}
        >
          {isInWideScreen ? (
            <Image
              src="/home/icons/earth.svg"
              w={{ sm: "2rem", md: "3rem", lg: "4rem", xl: "5rem" }}
            />
          ) : (
            <Image src="/home/icons/elipse.svg" w="8px" />
          )}
          <Text
            ml={{ sm: "10px", md: "10px", lg: "0px", xl: "0px" }}
            fontFamily="Poppins"
            fontSize={{ sm: "18", md: "24", lg: "24", xl: "24" }}
            textAlign="center"
            fontWeight="semibold"
          >
            e mais...
          </Text>
        </Flex>
      </GridItem>
    </Grid>
  );
}
