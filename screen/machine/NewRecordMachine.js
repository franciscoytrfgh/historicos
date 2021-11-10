import React from "react";
import { Box, Text, Heading, Input, FormControl, TextArea, Button, HStack } from "native-base";

const NewRecordMachine = () => {
  return (
    <Box p="5">
      <FormControl>
        <FormControl.Label>Tituto</FormControl.Label>
        <Input />
      </FormControl>

      <FormControl>
        <FormControl.Label>Detalles</FormControl.Label>
        <TextArea />
      </FormControl>

      <Heading size="xs">Contenido Extra</Heading>
      <HStack flex="1" my="2">
        <Button>Imagenes</Button>
        <Button>Videos</Button>
        <Button>Audio</Button>
        <Button>Propiedades</Button>
      </HStack>
      <Button>Guardar</Button>
    </Box>
  );
};

export default NewRecordMachine;
