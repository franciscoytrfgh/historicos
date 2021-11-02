import React from "react";
import {
  Box,
  Text,
  Heading,
  HStack,
  Spacer,
  Badge,
  Divider,
  Image,
  Pressable,
  VStack,
} from "native-base";

function BadgeGravedad({ type }) {
  switch (type) {
    case 0:
      return <Badge colorScheme="info">Baja</Badge>;
    case 1:
      return <Badge colorScheme="warning">Medio</Badge>;
    case 2:
      return <Badge colorScheme="danger">Alta</Badge>;
  }
}

const Historical = ({ item, color, view }) => {
  const imgs = item.imgs.length;
  const propiedades = Object.keys(item.propiedades).length;

  // false: es tipo lista.
  // true: es tipo tarjeta
  if (view) {
    return (
      <HStack bgColor={color} p="3">
        <Heading size="xs">{item.title}</Heading>
        <Spacer />
        <Text>{item.date}</Text>
      </HStack>
    );
  }

  return (
    <Box bgColor="white" w="100%" shadow="1" mb="3">
      {/* Imagen */}
      <VStack zIndex="1" w="100%">
        <Image
          source={{ uri: item.imgs[0].uri }}
          w="110%"
          h="100%"
          position="absolute"
        />
        {/* Info basia, por encima de la imagen */}
        <Box bgColor="rgba(0,0,0,0.5)" p="3">
          <HStack>
            <Heading color="white">{item.title}</Heading>
            <Spacer />
            <Text color="white">{item.date}</Text>
          </HStack>
          {/* Info basica */}
          <Text color="white">Nº de registros: </Text>
          <Text color="white">Empresa: {item.company}</Text>
          <Text color="white">Ubicacion: {}</Text>
          {/* end info basica */}
        </Box>
      </VStack>

      {/* info Ultimo registro */}
      <Pressable p="3">
        <Box>
          <Text>Ultimo registro: {item.ultimoRegistro.date}</Text>
          <Text>Titulo: {<Text bold>{item.ultimoRegistro.title}</Text>}</Text>
          <Text>Por: {item.ultimoRegistro.by.name}</Text>
          <HStack>
            <Text>Gravedad:</Text>
            <BadgeGravedad type={item.ultimoRegistro.gravedad} />
          </HStack>
        </Box>
      </Pressable>
      {/* end ultimo registro */}
      <Divider />
      <Text p="3">{item.detail}</Text>

      {/* informacion de canitadad de imagenes y/o propiedades */}
      <HStack space="0" mt="2" alignSelf="flex-end" p="3">
        {imgs > 0 ? (
          <Badge flexDirection="row" colorScheme="primary">
            {imgs} Imagenes
          </Badge>
        ) : null}

        <Badge flexDirection="row" colorScheme="primary">
          {propiedades} Propiedades
        </Badge>
      </HStack>
    </Box>
  );
};

export default Historical;
