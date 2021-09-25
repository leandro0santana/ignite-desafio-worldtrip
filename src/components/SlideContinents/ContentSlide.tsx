import { Flex, Heading, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

interface ContentSlideProps {
  imageBackground: string;
  herf: string;
  continentTitle: string;
  continentDescription: string;
}

export function ContentSlide({ 
  imageBackground, 
  herf, 
  continentTitle, 
  continentDescription 
}: ContentSlideProps) {
  return (
    <Flex
      w="100%"
      h="100%"
      mx="auto"
      bgImg={imageBackground}
      bgRepeat="no-repeat"
      justify="center"
      align="center"
    >
      <Link href={herf} passHref>
        <ChakraLink color="gray.50" fontWeight="bold">
          <Heading  fontSize={["4xl", "6xl"]} align="center" mb="6">
            {continentTitle}
          </Heading>
          <Text fontSize={["lg", "2xl"]} fontWeight="medium" align="center">
            {continentDescription}
          </Text>
        </ChakraLink>
      </Link>
    </Flex>
  );
}