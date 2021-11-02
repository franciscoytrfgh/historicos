import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import {
  Text,
  Box,
  HStack,
  Input,
  Button,
  Heading,
  VStack,
  Center,
} from "native-base";

export default function ScanScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // navigation.navigate("maquina", { codigo: data });
  };

  if (hasPermission === null) {
    return (
      <Center>
        <Heading>Permita el uso de la camara para scanear</Heading>
      </Center>
    );
  }
  if (hasPermission === false) {
    return (
      <Center>
        <Heading>No se puede acceder a la camara</Heading>
      </Center>
    );
  }

  return (
    <Box flex="1" justifyContent="center">
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.scanner}
      />
      {scanned && (
        <Button alignSelf="center" onPress={() => setScanned(false)}>
          Escanear de nuevo
        </Button>
      )}

      <VStack
        w="90%"
        top="40%"
        backgroundColor="white"
        borderRadius="10"
        padding="3"
        space="2"
        alignSelf="center"
      >
        <Heading size="xs">Tiene un codigo?</Heading>
        <HStack>
          <Input style={styles.input} placeholder="Ingresalo AQUI!" />
          <Button style={styles.button}>Ingresar</Button>
        </HStack>
      </VStack>
    </Box>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "70%",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: "white",
  },

  button: {
    width: "25%",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },

  scanner: {
    position: "absolute",
    width: "120%",
    height: "100%",
    backgroundColor: "#000",
    alignSelf: "center",
  },
});
