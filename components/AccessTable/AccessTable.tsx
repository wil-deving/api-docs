import {
  Heading,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  SimpleGrid,
  Grid,
  GridItem,
  Input,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Divider,
  ButtonGroup,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import { FaBeer } from "react-icons/fa";
//import { ReactNode } from "react";

interface Item {
  id: number;
  name: string;
}

export const AccessTable: React.FC<Item> = ({ id, name }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>
            These are modules to configure for webapp client
          </TableCaption>
          <Thead>
            <Tr>
              <Th isNumeric>Code</Th>
              <Th>input</Th>
              <Th>show</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Status</Td>
              <Td>millimetres (mm)</Td>
              <Td>
                <Button
                  leftIcon={<FaBeer />}
                  colorScheme="teal"
                  variant="solid"
                  onClick={onOpen}
                >
                  View
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>Name</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>Desc</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th isNumeric>Code</Th>
              <Th>input</Th>
              <Th>show</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Access log detail</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>
              Here i can watch all of details from an access as json, time...
            </p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
