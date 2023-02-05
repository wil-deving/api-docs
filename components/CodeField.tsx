import { Textarea, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Atribute {
  atribute: string;
  value: string | number | boolean;
}

const CodeField = () => {
  let perro = {
    nombre: "Scott",
    color: "Negro",
    macho: true,
    edad: 5,
  };

  const formatObject = (): Atribute[] => {
    let result: Atribute[] = [];
    Object.entries(perro).forEach(([key, value]) => {
      console.log(key + ":" + value);
      const element: Atribute = { atribute: key, value };
      result.push(element);
    });
    return result;
  };

  const properties = (): ReactNode => {
    const list = formatObject().map((item, index) => {
      return (
        <li key={index}>
          "
          <Text as="samp" color={"tomato"}>
            {item.atribute}
          </Text>
          ": "
          <Text as="samp" color={"blue"}>
            {item.value}
          </Text>
          "
        </li>
      );
    });
    return list;
  };

  return (
    <div>
      <ul>{properties()}</ul>
    </div>
  );
};
export default CodeField;
