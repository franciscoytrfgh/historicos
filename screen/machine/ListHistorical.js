import * as React from "react";
import {
  Box,
  Text,
  Heading,
  HStack,
  Spacer,
  Badge,
  Button,
  FlatList,
} from "native-base";

import ultimosScanner from "../../api/data";
import AppContext from "../../components/AppContext";

const colors = ["primary.400", "warning.400", "red.400"];

function Historical({ item }) {
  return (
    <Box
      w="95%"
      bgColor={colors[item.gravedad]}
      shadow="1"
      borderRadius="10"
      alignSelf="center"
      p="3"
      mb="3"
    >
      <HStack>
        <Heading w="75%" color="white">
          {item.title}
        </Heading>
        <Spacer />
        <Text color="white">{item.date}</Text>
      </HStack>
      <HStack>
        <Badge colorScheme="secondary.500">3 imagenes</Badge>
        <Badge colorScheme="secondary.500">1 Videos</Badge>
        <Badge colorScheme="secondary.500">1 Audio</Badge>
      </HStack>
      <Text color="white">Por: {item.by.name}</Text>
      <Text color="white">{item.detail}</Text>
      <Button mt="2">Detalles</Button>
    </Box>
  );
}

function ListHitorical({ navigation }) {
  const variableGlobales = React.useContext(AppContext);
  navigation.setOptions({
    title: ultimosScanner[variableGlobales.idMachine].title,
    headerRight: () => (
      <Button title="Info" color="#fff" right="2">
        ORDEN
      </Button>
    ),
  });

  return (
    <FlatList
      mt="3"
      w="100%"
      h="100%"
      data={ultimosScanner[variableGlobales.idMachine].lastRecord}
      renderItem={Historical}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ListHitorical;
