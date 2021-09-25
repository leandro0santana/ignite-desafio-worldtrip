import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { City } from "./City";

export function ContinentCities() {
  return (
    <Flex
      w="100%"
      mx="auto"
      maxWidth={1240}
      direction="column"
    >
      <Heading fontWeight="medium" px={["4", "0"]}>
        Cidades +100
      </Heading>
      <SimpleGrid flex="1" gap="6" minChildWidth="256px" px={["10", "0"]} my="5">
        <City
          imgCity="/images/londres.png"
          titleCity="Londres"
          textCountry="Reino Unido"
          countryFlag="/images/bandeira-reino-unido.png" 
        />
        <City
          imgCity="/images/paris.png"
          titleCity="Paris"
          textCountry="França"
          countryFlag="/images/bandeira-franca.png" 
        />
        <City
          imgCity="/images/roma.png"
          titleCity="Roma"
          textCountry="Itália"
          countryFlag="/images/bandeira-italia.png" 
        />
        <City
          imgCity="/images/praga.png"
          titleCity="Praga"
          textCountry="República Tcheca"
          countryFlag="/images/bandeira-republica-tcheca.png" 
        />
        <City
          imgCity="/images/amsterda.png"
          titleCity="Amsterdã"
          textCountry="Holanda"
          countryFlag="/images/bandeira-holando.png" 
        />
      </SimpleGrid>
    </Flex>
  );
}