import React from "react";
import {
  Box,
  Text,
  Button,
  HStack,
  Avatar,
  Heading,
  VStack,
  Link,
  Divider,
  Spacer,
} from "native-base";

import AppContext from "../../components/AppContext";
import HistoricalList from "./components/HistoricalList";

const UserScreen = () => {
  const variableGlobales = React.useContext(AppContext);

  return (
    <Box mt="5%" p="5" w="100%" alignSelf="center" justifyContent="center">
      <HStack space="5" mb="5">
        <Avatar size="xl" />
        <VStack>
          <Heading>Luis Barra</Heading>
          <Text>Empresa: PARTICULAR</Text>
          <Link>
            <Text>Email: </Text>luisbarra454@gmail.com
          </Link>
          <Link>
            <Text>Celular: </Text>+56991067420
          </Link>

          <Text>Total de registros: 10</Text>
        </VStack>
      </HStack>

      {/* Ultimos registros */}
      <HistoricalList title="Mis ultimos registros" />

      <Button
        onPress={() => {
          variableGlobales.setLogin(false);
        }}
      >
        Salir
      </Button>
    </Box>
  );
};

export default UserScreen;
