import * as React from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  HStack,
  Spacer,
  Divider,
  Badge,
  ScrollView,
  Image,
} from "native-base";

import { Dimensions, Platform } from "react-native";
const { width } = Dimensions.get("window");
const { height } = width * 0.6;

import ultimosScanner from "../../api/data";
import AppContext from "../../components/AppContext";

function BadgeGravedad(type) {
  switch (type) {
    case 0:
      return <Badge colorScheme="info">Baja</Badge>;
    case 1:
      return <Badge colorScheme="warning">Medio</Badge>;
    case 2:
      return <Badge colorScheme="danger">Alta</Badge>;
  }
}

export default function InfoMachine() {
  const variableGlobales = React.useContext(AppContext);
  console.log(variableGlobales);

  const item = ultimosScanner[variableGlobales.idMachine];

  return (
    <Box w="100%" h="100%">
      <ScrollView
        w={width}
        h={height}
        bgColor="#222"
        horizontal
        pagingEnabled={Platform.OS != "web" ? true : false}
        showsHorizontalScrollIndicator={false}
      >
        {item.imgs.map((img) => {
          if (img == "") return null;
          return (
            <Image
              alt="Foto de la maquina"
              source={{ uri: img }}
              w={width}
              h={height}
              resizeMode="cover"
            />
          );
        })}
      </ScrollView>

      <VStack
        w="92%"
        h="65%"
        bgColor="white"
        top="-10%"
        borderRadius="10"
        alignSelf="center"
        shadow="1"
        p="5"
        space="1"
      >
        <HStack>
          <Heading>{item.title}</Heading>
          <Spacer />
          <Text alignSelf="center">{item.date}</Text>
        </HStack>

        <Heading size="xs">Descripcion</Heading>
        <Text>{item.detail}</Text>

        <Divider />
        <Box>
          <Text>Nº de registros: </Text>
          <Text>Empresa: {item.company}</Text>
          <Text>Ubicacion: {item.location}</Text>
        </Box>
        <Divider />
        <Box>
          <HStack>
            <Heading size="xs">Ultimo registro</Heading>
            <Spacer />
            <Text alignSelf="center">{item.ultimoRegistro.date}</Text>
          </HStack>
          <Text>Titulo: {item.ultimoRegistro.title}</Text>
          <Text>Por: {item.ultimoRegistro.by.name}</Text>
          <Text>Gravedad {BadgeGravedad(item.ultimoRegistro.gravedad)}</Text>
        </Box>
        <Divider />
        <ScrollView h="200">
          <Heading size="xs">Propiedades</Heading>
          {Object.keys(item.propiedades).map((key) => {
            return (
              <HStack space="2">
                <Text>
                  {key}: <Badge>{item.propiedades[key]}</Badge>
                </Text>
              </HStack>
            );
          })}
        </ScrollView>
      </VStack>
    </Box>
  );
}
