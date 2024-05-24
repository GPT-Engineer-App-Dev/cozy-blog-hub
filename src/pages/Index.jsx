import { Box, Container, Flex, Heading, Text, VStack, Link, HStack, Spacer } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="brand.800" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex align="center">
            <Heading as="h1" size="lg">My Blog</Heading>
            <Spacer />
            <HStack spacing={4}>
              <Link href="#home" _hover={{ textDecoration: "none", color: "brand.300" }}>Home</Link>
              <Link href="#about" _hover={{ textDecoration: "none", color: "brand.300" }}>About</Link>
              <Link href="#contact" _hover={{ textDecoration: "none", color: "brand.300" }}>Contact</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container maxW="container.lg" py={10}>
        <VStack spacing={8} align="stretch">
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">First Blog Post</Heading>
            <Text mt={4}>This is the content of the first blog post. It's just a placeholder for now.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Second Blog Post</Heading>
            <Text mt={4}>This is the content of the second blog post. It's just a placeholder for now.</Text>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="brand.800" color="white" py={4} mt={10}>
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between">
            <Text>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</Text>
            <HStack spacing={4}>
              <Link href="https://twitter.com" isExternal>
                <FaTwitter />
              </Link>
              <Link href="https://github.com" isExternal>
                <FaGithub />
              </Link>
              <Link href="https://linkedin.com" isExternal>
                <FaLinkedin />
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;