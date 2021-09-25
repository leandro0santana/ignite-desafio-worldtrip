import { Flex, Box, Heading, Image, SimpleGrid, Center } from "@chakra-ui/react";
import { Travel } from "./Travel";

export function TravelTypes() {
  return (
    <Flex
      w="100%"
      mx="auto"
      h={["250px", "300px"]}
      maxWidth={1160}
      justify="center"
      align="center"
    >
      <SimpleGrid flex="1" gap="2" minChildWidth="110px" p="5" justify="center">
        <Travel image="/images/cocktail.svg" title="vida noturna" />
        <Travel image="/images/surf.svg" title="praia" />
        <Travel image="/images/building.svg" title="moderno" />
        <Travel image="/images/museum.svg" title="clássico" />
        <Travel image="/images/earth.svg" title="e mais..." />
      </SimpleGrid>
    </Flex>
  );
}