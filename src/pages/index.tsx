import { Flex, Heading, Center, Divider } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelTypes";
import { SlideContinents } from "../components/SlideContinents";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />

      <Banner />

      <TravelTypes />

      <Flex justify="center">
        <Center w={90}>
          <Divider borderColor="gray.600" border="2px" opacity="1" />
        </Center>
      </Flex>
      <Flex direction="column" justify="center" maxWidth={800} mx="auto" my="14">
        <Heading  fontSize="36" fontWeight="medium" align="center" mb="4">
          Vamos nessa?
        </Heading>
        <Heading  fontSize="36" fontWeight="medium" align="center">
          Então escolha seu continente
        </Heading>
      </Flex>

      <SlideContinents />
    </Flex>
  )
}
