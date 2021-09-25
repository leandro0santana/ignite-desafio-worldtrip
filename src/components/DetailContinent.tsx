import { 
  Flex, 
  SimpleGrid, 
  Text, 
  Heading, 
  Popover, 
  PopoverTrigger, 
  PopoverContent, 
  PopoverArrow, 
  PopoverCloseButton, 
  PopoverBody, 
  Icon, 
  HStack 
} from "@chakra-ui/react"
import { FiInfo } from "react-icons/fi"

export function DetailContinent() {
  return (
    <Flex
      w="100%"
      mx="auto"
      h={["450px", "300px"]}
      maxWidth={1240}
      justify="center"
      align="center"
    >
      <SimpleGrid flex="1" gap="8" minChildWidth="320px" px="5">
        <Text align="justify" fontSize="xl">
          A Europa é, por convenção, um dos seis continentes do mundo. 
          Compreendendo a península ocidental da Eurásia, a Europa geralmente 
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, 
          o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
        <Flex justify="center" align="center">
          <HStack spacing={["12", "16"]}>
            <Flex direction="column" justify="center" align={["flex-start","center"]}>
              <Heading color="yellow.500" fontSize={["4xl","6xl"]}>
                50
              </Heading>

              <Text fontWeight="semibold" fontSize={["sm","xl"]}>
                países
              </Text>
            </Flex>
            <Flex direction="column" justify="center" align={["flex-start","center"]}>
              <Heading color="yellow.500" fontSize={["4xl","6xl"]}>
                60
              </Heading>

              <Text fontWeight="semibold" fontSize={["sm","xl"]}>
                línguas
              </Text>
            </Flex>
            <Flex direction="column" justify="center" align={["flex-start","center"]}>
              <Heading color="yellow.500" fontSize={["4xl","6xl"]}>
                27
              </Heading>

              <Text fontWeight="semibold" fontSize={["sm","xl"]}>
                cidades +100 
                <Popover>
                  <PopoverTrigger>
                    <span>
                      <Icon cursor="pointer" as={FiInfo} ml="1" color="gray.300" />
                    </span>
                  </PopoverTrigger>
                  <PopoverContent borderColor="yellow.500">
                    <PopoverArrow />
                    <PopoverCloseButton color="yellow.500" />
                    <PopoverBody color="yellow.500">Loudres, Paris, Roma, Praga, Amsterdã</PopoverBody>
                  </PopoverContent>
                </Popover>
              </Text>
            </Flex>
          </HStack>
        </Flex>
      </SimpleGrid>
    </Flex>
  ) 
}