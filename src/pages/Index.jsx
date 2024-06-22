import { Container, Text, VStack, Heading, Box, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to Reading Haven</Heading>
        <Box boxSize="sm">
          <Image src="/images/reading-haven.jpg" alt="Reading Haven" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Dive into a world of captivating stories and insightful articles. Your journey to knowledge and entertainment starts here.
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;