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
import { ReactNode, useEffect, useState } from "react";
import CodeField from "../../components/CodeField/CodeField";
import { FaBeer } from "react-icons/fa";
import { PhoneIcon, AddIcon, WarningIcon, MinusIcon } from "@chakra-ui/icons";

interface Parameter {
  id: number;
  key: string;
  value: string | number | boolean;
}

export const ParameterField = () => {
  const [identifier, useIdentifier] = useState<number>(0);
  const [parameters, useParameters] = useState<Array<Parameter>>([]);

  const createField = () => {
    console.log("createField");
    const field: Parameter = {
      id: identifier,
      key: "",
      value: "",
    };
    const currentData = parameters;
    currentData.push(field);
    useIdentifier(identifier + 1);
    useParameters(currentData);
  };

  const buildFields = (data: Array<Parameter>): ReactNode => {
    const result = data.map((item) => {
      return (
        <SimpleGrid columns={2} spacing={5}>
          <Input variant="outline" placeholder={item.key} />
          <Input variant="outline" placeholder={item.value.toString()} />
        </SimpleGrid>
      );
    });
    return result;
  };

  useEffect(() => {
    console.log("parameters", parameters);
  }, [parameters, identifier]);

  return (
    <Stack spacing={3} padding={10}>
      <ButtonGroup size="sm" isAttached variant="outline">
        <Button>Add parameter</Button>
        <IconButton
          aria-label="Add to friends"
          icon={<AddIcon />}
          onClick={createField}
        />
        <IconButton aria-label="Add to friends" icon={<MinusIcon />} />
      </ButtonGroup>

      <>{buildFields(parameters)}</>
    </Stack>
  );
};
