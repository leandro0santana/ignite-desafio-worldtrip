import { Flex, Box, Heading, Text, Image, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
        w="100%"
        h={["250px", "335px"]}
        maxWidth={1440}
        mx="auto"
        bgImg="images/banner-home.png"
        bgRepeat="no-repeat"
        align="center"
        justify="center"
      >
        <SimpleGrid flex="1" gap="6" minChildWidth="320px" h={["200px", "320px"]}>
          <Box
            p={["4", "8"]}
            m={["2", "8"]}
          > 
            <Heading color="gray.50" fontSize={["2xl", "4xl"]} lineHeight={["1.5"]} fontWeight="medium">
              5 Continentes, <br />
              infinitas possibilidades.
            </Heading>

            <Text color="gray.50" mt={["4","8"]} fontSize={["sm", "xl"]}>
              Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
            </Text>
          </Box>
          {
            isWideVersion && (
              <Box
                p={["6", "8"]}
                pb="4"
                display="flex"
                justifyContent="center"
                alignItems="flex-end"
                mb="-16"
              >
                <Image
                  src="/images/airplane.svg"
                  alt="Airplane"
                  maxWidth={420}
                />
              </Box>
            )
          }
        </SimpleGrid>
      </Flex>
  );
}