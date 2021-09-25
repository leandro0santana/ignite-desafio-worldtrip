import { Flex, Image, Link as ChakraLink, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";

interface HomeProps {
  home?: boolean;
}

export function Header({ home = false }: HomeProps) {
  return (
    <Flex 
      as="header"
      w="100%"
      maxWidth={1440}
      h="24"
      mx="auto"
      align="center"
      justify="center"
    >
      { home && (
        <Link href="/" passHref>
          <ChakraLink>
            <Icon as={FiChevronLeft} fontSize="35" />
          </ChakraLink>
        </Link>
      )}
      <Image
        src="/images/logo.png"
        alt="WorldTrip"
        mx="auto"
      />
    </Flex>
  );
}