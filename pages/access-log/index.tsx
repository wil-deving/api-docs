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
import { ReactNode, useState } from "react";
import CodeField from "../../components/CodeField/CodeField";
import { AccessTable } from "../../components/AccessTable/AccessTable";
import { FaBeer } from "react-icons/fa";
import { PhoneIcon, AddIcon, WarningIcon, MinusIcon } from "@chakra-ui/icons";

interface Client {
  id_rol: number;
  client: string;
}

interface Module {
  id: number;
  id_rol: number;
  id_module: number;
  code: number;
  name: string;
  description: string;
  class: string;
  status: number;
}

const AccessLog = () => {
  const [clientList, setClientList] = useState<Array<Client>>([
    { id_rol: 15, client: "webapp" },
  ]);

  const [modulesList, setModulesList] = useState<Array<Module>>([
    {
      id: 1,
      id_rol: 15,
      id_module: 324,
      code: 300,
      name: "Buscar Polizas",
      description: "Aqui se buscan las polizas",
      class: "api.bisase.com",
      status: 1,
    },
    {
      id: 1,
      id_rol: 15,
      id_module: 325,
      code: 121,
      name: "Login",
      description: "Aqui se valida usuario",
      class: "api.bisase.com",
      status: 1,
    },
  ]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const clientListUI = (clientList: Array<Client>): ReactNode => {
    const clientItem = (): ReactNode =>
      clientList.map((item) => <MenuItem>{item.client}</MenuItem>);

    return (
      <Menu>
        <MenuButton as={Button} colorScheme="pink">
          Please select a client...
        </MenuButton>
        <MenuList>{clientItem()}</MenuList>
      </Menu>
    );
  };

  const moduleListUI = (moduleList: Array<Module>): ReactNode => {
    const moduleItem = (): ReactNode =>
      moduleList.map((item) => (
        <MenuItem>
          {item.code}: {item.name}
        </MenuItem>
      ));

    return (
      <Menu>
        <MenuButton as={Button} colorScheme="pink">
          Please select a method...
        </MenuButton>
        <MenuList>{moduleItem()}</MenuList>
      </Menu>
    );
  };

  return (
    <>
      <Stack spacing={4}>
        <Heading as="h3" size="lg">
          Servicios API
        </Heading>
        <Heading as="h4" size="md">
          Bisa Seguros y Reaseguros S.A.
        </Heading>
      </Stack>
      <Grid
        h="90vh"
        templateRows="repeat(12, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={12} colSpan={1} bg="pink">
          <Stack spacing={3} padding={10}>
            <Text mb="8px">Usuario cliente:</Text>
            {clientListUI(clientList)}
            <Text mb="8px">Método:</Text>
            {moduleListUI(modulesList)}
            <Text mb="8px">Top:</Text>
            <NumberInput defaultValue={20} precision={0} step={1}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Stack>
          <Divider orientation="horizontal" />
          <Stack spacing={3} padding={10}>
            <ButtonGroup size="sm" isAttached variant="outline">
              <Button>Add parameter</Button>
              <IconButton aria-label="Add to friends" icon={<AddIcon />} />
              <IconButton aria-label="Add to friends" icon={<MinusIcon />} />
            </ButtonGroup>
            <SimpleGrid columns={2} spacing={5}>
              <Input variant="outline" placeholder="Outline" />
              <Input variant="outline" placeholder="Outline" />
            </SimpleGrid>
            <SimpleGrid columns={2} spacing={5}>
              <Input variant="outline" placeholder="Outline" />
              <Input variant="outline" placeholder="Outline" />
            </SimpleGrid>
          </Stack>
        </GridItem>
        <GridItem colSpan={2} rowSpan={2} bg="yellow">
          <SimpleGrid columns={3} spacing={5}>
            <Input variant="outline" placeholder="Año" />
            <Input variant="outline" placeholder="Mes" />
            <Input variant="outline" placeholder="Día" />
          </SimpleGrid>
        </GridItem>
        <GridItem colSpan={2} rowSpan={2} bg="blue">
          <Button
            leftIcon={<FaBeer />}
            colorScheme="teal"
            variant="solid"
            onClick={onOpen}
          >
            Manage modules from client: {clientList[0].client}
          </Button>
        </GridItem>
        <GridItem colSpan={4} rowSpan={10} bg="tomato">
          <AccessTable id={0} name={""} />
        </GridItem>
      </Grid>

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modules from webapp</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TableContainer>
              <Table variant="simple">
                <TableCaption>
                  These are modules to configure for webapp client
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th isNumeric>Code</Th>
                    <Th>status</Th>
                    <Th>Name</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Status</Td>
                    <Td>millimetres (mm)</Td>
                    <Td isNumeric>25.4</Td>
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
                    <Th>status</Th>
                    <Th>Name</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>

            <input
              type="text"
              placeholder="new code, ... solo cuando accione add module"
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Add module</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AccessLog;
