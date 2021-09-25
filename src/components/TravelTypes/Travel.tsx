import { Flex, Box, Heading, Image, useBreakpointValue } from "@chakra-ui/react";

interface TravelProps {
  image: string;
  title: string;
}

export function Travel({ image, title }: TravelProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      {
        isWideVersion && (
          <Flex justify="center">
            <Image
              src={image}
              alt={title}
              boxSize="85px"
            />
          </Flex>
        )
      }
      <Heading
        fontSize={["xl", "2xl"]}
        fontWeight="semibold"
        align="center"
        mt="4"
      >
        {isWideVersion ? title : (
          <Flex justify="center" align="center">
            <Image
              src="/images/ellipse.svg"
              alt="ellipse"
              boxSize="8px"
              mr="3" 
            /> {title}
          </Flex>
        )}
      </Heading>
    </Box>
  );
}