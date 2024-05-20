import React, { useState } from 'react';
import { Container, Heading, VStack, FormControl, FormLabel, Input, Button, Table, Thead, Tbody, Tr, Th, Td, IconButton, Flex } from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";

const VehicleManagement = () => {
  const [vehicles, setVehicles] = useState([]);
  const [vehicle, setVehicle] = useState({ id: '', make: '', model: '', year: '', licensePlate: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle({ ...vehicle, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setVehicles([...vehicles, vehicle]);
    setVehicle({ id: '', make: '', model: '', year: '', licensePlate: '' });
  };

  const handleDelete = (id) => {
    setVehicles(vehicles.filter(v => v.id !== id));
  };

  const handleEdit = (id) => {
    const vehicleToEdit = vehicles.find(v => v.id === id);
    setVehicle(vehicleToEdit);
    setVehicles(vehicles.filter(v => v.id !== id));
  };

  return (
    <Container maxW="container.md" mt={10}>
      <Flex mb={4} align="center">
        <Link to="/">
          <Button leftIcon={<ArrowBackIcon />} colorScheme="teal" variant="outline">
            Back
          </Button>
        </Link>
      </Flex>
      <Heading as="h2" size="xl" mb={6}>Vehicle Management</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} mb={6}>
          <FormControl id="id" isRequired>
            <FormLabel>Vehicle ID</FormLabel>
            <Input name="id" value={vehicle.id} onChange={handleChange} />
          </FormControl>
          <FormControl id="make" isRequired>
            <FormLabel>Make</FormLabel>
            <Input name="make" value={vehicle.make} onChange={handleChange} />
          </FormControl>
          <FormControl id="model" isRequired>
            <FormLabel>Model</FormLabel>
            <Input name="model" value={vehicle.model} onChange={handleChange} />
          </FormControl>
          <FormControl id="year" isRequired>
            <FormLabel>Year</FormLabel>
            <Input name="year" value={vehicle.year} onChange={handleChange} />
          </FormControl>
          <FormControl id="licensePlate" isRequired>
            <FormLabel>License Plate</FormLabel>
            <Input name="licensePlate" value={vehicle.licensePlate} onChange={handleChange} />
          </FormControl>
          <Button type="submit" colorScheme="teal" width="100%">Add Vehicle</Button>
        </VStack>
      </form>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Vehicle ID</Th>
            <Th>Make</Th>
            <Th>Model</Th>
            <Th>Year</Th>
            <Th>License Plate</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {vehicles.map((v) => (
            <Tr key={v.id}>
              <Td>{v.id}</Td>
              <Td>{v.make}</Td>
              <Td>{v.model}</Td>
              <Td>{v.year}</Td>
              <Td>{v.licensePlate}</Td>
              <Td>
                <Flex>
                  <IconButton icon={<FaEdit />} mr={2} onClick={() => handleEdit(v.id)} />
                  <IconButton icon={<FaTrash />} onClick={() => handleDelete(v.id)} />
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default VehicleManagement;