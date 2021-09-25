import { Flex } from "@chakra-ui/react";

import { BannerContinent } from "../components/BannerContinent";
import { ContinentCities } from "../components/ContinentCities";
import { DetailContinent } from "../components/DetailContinent";
import { Header } from "../components/Header";

export default function Europa() {
  return (
    <Flex direction="column">
      <Header home={true} />

      <BannerContinent />

      <DetailContinent />

      <ContinentCities />
    </Flex>
  );
}