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
    <>
      <Image
        source={{ uri: item.imgs[0].uri }}
        w="100%"
        h="93%"
        position="absolute"
        borderRadius="10"
        zIndex="-1"
        alt=""
      />
      <Box p="5" bgColor="#rgba(0,0,0,.5)" mb="3" borderRadius="10">
        <HStack>
          <Heading color="white">{item.title}</Heading>
          <Spacer />
          <Text color="white">{item.date}</Text>
        </HStack>
        {/* Info basica */}
        <Text color="white">Nº de registros: </Text>
        <Text color="white">Empresa: {item.company}</Text>
        <Text color="white">Ubicacion: {item.location}</Text>
        {/* end info basica */}

        <HStack alignSelf="flex-end">
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
    </>
  );
};

export default Historical;
