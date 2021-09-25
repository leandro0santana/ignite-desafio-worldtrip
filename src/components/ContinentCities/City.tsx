import { Flex, Box, Image } from "@chakra-ui/react"

interface CityProps {
  imgCity: string;
  titleCity: string;
  textCountry: string;
  countryFlag: string;
}

export function City({ 
  imgCity, 
  titleCity, 
  textCountry, 
  countryFlag 
}: CityProps) {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderColor="yellow.500"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image src={imgCity} alt={titleCity} w="100%" />

      <Flex p="6" justify="space-between" align="center" >
        <Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {titleCity}
          </Box>
          <Box as="span" color="gray.300" fontSize="sm">
            {textCountry}
          </Box>
        </Box>
        
        <Image src={countryFlag} alt={textCountry} boxSize="30px" />
      </Flex>
    </Box>
  );
}