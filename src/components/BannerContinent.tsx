import { Flex, Heading, useBreakpointValue } from "@chakra-ui/react";

export function BannerContinent() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
        w="100%"
        h={[200, 500]}
        maxWidth={1440}
        mx="auto"
        bgImg="images/europa.png"
        bgRepeat="no-repeat"
        bgSize="cover"
        align={["center", "flex-end"]}
        justify={["center", "flex-start"]}
      >
        <Heading
          color="gray.50"
          fontSize={["5xl", "4xl"]}
          fontWeight="semibold"
          m={["4", "16"]}
        >
          Europa
        </Heading>
      </Flex>
  );
}