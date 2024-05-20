import { Container, Text, VStack, Heading, Box, Button } from "@chakra-ui/react";
import { FaBus, FaTruck, FaRoute } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={6}>Transport Management System</Heading>
        <Text fontSize="xl" textAlign="center">Efficiently manage your transport operations with our comprehensive system.</Text>
        <Box mt={10}>
          <Button leftIcon={<FaBus />} colorScheme="teal" size="lg" mb={4}>
            Manage Buses
          </Button>
          <Button leftIcon={<FaTruck />} colorScheme="teal" size="lg" mb={4}>
            Manage Trucks
          </Button>
          <Button leftIcon={<FaRoute />} colorScheme="teal" size="lg">
            Manage Routes
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;